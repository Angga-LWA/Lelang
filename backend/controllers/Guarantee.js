import Guarantee from "../models/GuaranteeModel.js";
import User from "../models/UserModel.js";

export const getGuarantee = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Guarantee.findAll({
                include:[{
                    model: User
                }]
            });
        }else{
            response = await Guarantee.findAll({
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

export const getGuaranteeById = (req, res) => {
   
}

export const createGuarantee = (req, res) => {
    
}

export const updateGuarantee = (req, res) => {
    
}

export const deleteGuarantee = (req, res) => {
    
}