import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id', 'username','first_name','last_name','email','password','flag_active','nik','npwp','created_by']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['id', 'username','first_name','last_name','email','password','flag_active','nik','npwp','created_by'],
            where: {
                uuid: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createUser = async(req, res) =>{
    const {username, first_name, last_name, email, password, confPassword, flag_active, nik, npwp, created_by} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password sama confirm password gak sama..."});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            flag_active: flag_active,
            nik: nik,
            npwp: npwp,
            created_by: created_by
        });
        res.status(201).json({msg: "Sukses Regis"});  
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            id: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {username, first_name, last_name, email, password, confPassword, flag_active, nik, npwp, created_by} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if(password !== confPassword) return res.status(400).json({msg: "Password sama confirm password gak sama..."});
    try {
        await User.update({
            username: username,
            first_name: first_name,
            last_name: last_name,
            email: email,
            password: password,
            flag_active: flag_active,
            nik: nik,
            npwp: npwp,
            created_by: created_by
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Sukses Update"});  
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const deleteUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    try {
        await User.destroy({
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Sukses Hapus"});  
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}