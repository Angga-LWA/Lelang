import BidLogs from "../models/BidLogsModel.js";
import User from "../models/UserModel.js";

export const getBidLogs = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await BidLogs.findAll({
                include:[{
                    model: User
                }]
            });
        }else{
            response = await BidLogs.findAll({
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

export const getBidLogsById = (req, res) => {
   
}

export const createBidLogs = (req, res) => {
    
}

export const updateBidLogs = (req, res) => {
    
}

export const deleteBidLogs = (req, res) => {
    
}