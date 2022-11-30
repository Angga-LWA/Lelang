import Blacklist from "../models/BlacklistModel.js";
import User from "../models/UserModel.js";

export const getBlacklist = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Blacklist.findAll({
                include:[{
                    model: User
                }]
            });
        }else{
            response = await Blacklist.findAll({
                where:{
                    id_user: req.id_user
                },
                include:[{
                    model: User
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getBlacklistById = (req, res) => {
   
}

export const createBlacklist = (req, res) => {
    
}

export const updateBlacklist = (req, res) => {
    
}

export const deleteBlaclist = (req, res) => {
    
}