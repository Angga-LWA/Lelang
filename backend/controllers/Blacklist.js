import Blacklist from "../models/BlacklistModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getBlacklist = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Blacklist.findAll({
                attributes:['status','release_date','created_by'],
                include:[{
                    model: User,
                    attributes:['username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp']
                }]
            });
        }else{
            response = await Blacklist.findAll({
                attributes:['status','release_date','created_by'],
                where:{
                    id_user: req.id_user
                },
                include:[{
                    model: User,
                    attributes:['username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getBlacklistById = async (req, res) => {
    try {
        const blacklist = await Blacklist.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!blacklist) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Blacklist.findAll({
                attributes:['status','release_date','created_by'],
                where:{
                    id: blacklist.id
                },
                include:[{
                    model: User,
                    attributes:['username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp']
                }]
            });
        }else{
            response = await Blacklist.findAll({
                attributes:['status','release_date','created_by'],
                where:{
                    [Op.and]:[{id: blacklist.id}, {id_user: req.id_user}]
                },
                include:[{
                    model: User,
                    attributes:['username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const createBlacklist = (req, res) => {
    
}

export const updateBlacklist = (req, res) => {
    
}

export const deleteBlaclist = (req, res) => {
    
}