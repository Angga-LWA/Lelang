import BidRegist from "../models/BidRegistModel.js";
import User from "../models/UserModel.js";

export const getBidRegist = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await BidRegist.findAll({
                include:[{
                    model: User
                }]
            });
        }else{
            res = await BidRegist.findAll({
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

export const getBidRegistById = (req, res) => {
   
}

export const createBidRegist = (req, res) => {
    
}

export const updateBidRegist = (req, res) => {
    
}

export const deleteBidRegist = (req, res) => {
    
}