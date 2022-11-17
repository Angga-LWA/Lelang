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
    const role = user.role;
    const accessToken = jwt.sign({uuid, username, email, role}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn: '20s'
    });
    const refreshToken = jwt.sign({uuid, username, email, role}, process.env.REFRESH_TOKEN_SECRET,{
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
    res.json({username, email, role, accessToken});
}

export const Me = async (req, res) =>{
    if(!req.session.userId){
        return res.status(401).json({msg: "Mohon login ke akun Anda!"});
    }
    const user = await User.findOne({
        attributes:['uuid','username','email','role'],
        where: {
            uuid: req.session.userId
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    res.status(200).json(user);
}

export const logOut = (req, res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg: "Tidak dapat logut"});
        res.status(200).json({msg: "Anda telah logout"});
    });

//    const refreshToken = req.cookies.refreshToken;
//    if(!refreshToken) return res.sendStatus(204);
//    const user = await User.findAll({
//     where:{
//         refresh_token: refreshToken
//     }
//    });
//    if(!user[0]) return res.sendStatus(204);
//    const userId = user[0].id;
//    await User.update({refresh_token: null},{
//         where:{
//             id: userId
//         }
//    });
//    res.clearCookie('refreshToken');
//    return res.sendStatus(200);
}