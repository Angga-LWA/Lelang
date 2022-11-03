import User from "../models/UserModel.js";
import argon2 from "argon2";

export const getUsers = async(req, res) => {
    try {
        const response = await User.findAll({
            attributes:['id','username','firstname','last_name','email','password','flag_active','nik','npwp','flag_active','created_by']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getUserById = async(req, res) => {
    try {
        const response = await User.findOne({
            attributes:['id','username','firstname','last_name','email','password','flag_active','nik','npwp','flag_active','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
    
}

export const Register = (req, res) => {
    
}

export const updateUser = (req, res) => {
    
}

export const deleteUser = (req, res) => {
    
}