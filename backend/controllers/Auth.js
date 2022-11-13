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
}

export const logOut = async(req, res) =>{
   const refreshToken = req.cookies.refreshToken;
   if(!refreshToken) return res.sendStatus(204);
   const user = await User.findAll({
    where:{
        refresh_token: refreshToken
    }
   });
   if(!user[0]) return res.sendStatus(204);
   const userId = user[0].id;
   await User.update({refresh_token: null},{
        where:{
            id: userId
        }
   });
   res.clearCookie('refreshToken');
   return res.sendStatus(200);
}