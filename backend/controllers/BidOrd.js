import BidOrd from "../models/BidOrdModel.js";
import User from "../models/UserModel.js";

export const getBidOrd = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await BidOrd.findAll({
                include:[{
                    model: User
                }]
            });
        }else{
            response = await BidOrd.findAll({
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

export const getBidOrdById = (req, res) => {
   
}

export const createBidOrd = (req, res) => {
    
}

export const updateBidOrd = (req, res) => {
    
}

export const deleteBidOrd = (req, res) => {
    
}