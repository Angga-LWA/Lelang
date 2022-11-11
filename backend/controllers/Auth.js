import User from "../models/UserModel.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";

export const Login = async (req, res) =>{
    const user = await User.findOne({
        where: {
            email: req.body.email
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan / Password Salah"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(404).json({msg: "User tidak ditemukan / Password Salah"});
    req.session.userId = user.uuid;
    const uuid = user.uuid;
    const username = user.username;
    const email = user.email;
    const accessToken = jwt.sign({uuid, username, email}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '20s'
    });
    const refreshToken = jwt.sign({uuid, username, email}, process.env.REFRESH_TOKEN_SECRET,{
        expiresIn: '1d'
    });
    await User.update({refresh_token: refreshToken},{
        where:{
            uuid: uuid
        }
    });
    res.cookie('refreshToken', refreshToken,{
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    });
    res.json({ accessToken });
    // res.status(200).json({uuid, username, email, accessToken});
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logout"});
        res.status(200).json({msg: "Anda telah logout"});
    });
}