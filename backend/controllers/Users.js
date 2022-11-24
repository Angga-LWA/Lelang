import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) =>{
    try {
        const response = await User.findAll({
            attributes:['id','uuid','username','email','role']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            attributes:['id', 'username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp','created_by','role'],
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
    const {username, first_name, last_name, phone, birthday, birthplace, address_id, address_domisili, profile_img, email, password, confPassword, flag_active, nik, npwp, created_by, role} = req.body;
    if(password !== confPassword) return res.status(400).json({msg: "Password sama confirm password gak sama..."});
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            username: username,
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            birthday: birthday,
            birthplace: birthplace,
            address_id: address_id,
            address_domisili: address_domisili,
            profile_img: profile_img,
            email: email,
            password: hashPassword,
            flag_active: flag_active,
            nik: nik,
            npwp: npwp,
            created_by: created_by,
            role: role
        });
        res.status(201).json({msg: "Sukses Regis"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateUser = async(req, res) =>{
    const user = await User.findOne({
        where: {
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User tidak ditemukan"});
    const {username, first_name, last_name, phone, birthday, birthplace, address_id, address_domisili, profile_img, email, password, confPassword, flag_active, nik, npwp, created_by, role} = req.body;
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
            phone: phone,
            birthday: birthday,
            birthplace: birthplace,
            address_id: address_id,
            address_domisili: address_domisili,
            profile_img: profile_img,
            email: email,
            password: hashPassword,
            flag_active: flag_active,
            nik: nik,
            npwp: npwp,
            created_by: created_by,
            role: role
        },{
            where:{
                id: user.id
            }
        });
        res.status(200).json({msg: "Sukses Update User"});
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
