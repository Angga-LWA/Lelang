import BidRegist from "../models/BidRegistModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";

export const getBidRegist = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await BidRegist.findAll({
                attributes:['prdcode'],
                include:[{
                    model: User,
                    attributes:['username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp']
                }]
            });
        }else{
            res = await BidRegist.findAll({
                attributes:['prdcode'],
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

export const getBidRegistById = async (req, res) => {
    try {
        const bidregist = await BidRegist.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!bidregist) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await BidRegist.findOne({
                attributes:['prdcode'],
                where:{
                    id: bidregist.id
                },
                include:[{
                    model: User,
                    attributes:['username','first_name','last_name','phone','birthday','birthplace','address_id','address_domisili','profile_img','email','password','flag_active','nik','npwp']
                }]
            });
        }else{
            res = await BidRegist.findOne({
                attributes:['prdcode'],
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

export const createBidRegist = (req, res) => {
    
}

export const updateBidRegist = (req, res) => {
    
}

export const deleteBidRegist = (req, res) => {
    
}