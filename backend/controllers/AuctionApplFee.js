import AuctionApplFee from "../models/AuctionApplFeeModel.js";
import AuctionType from "../models/AuctionTypeModel.js";
import BeaNominal from "../models/BeaNominalModel.js";

export const getAuctionApplFee = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await AuctionApplFee.findAll({
                include:[{
                    model: AuctionType, BeaNominal
                }]
            });
        }else{
            response = await AuctionApplFee.findAll({
                where:{
                    id_auctiontype: req.id_auctiontype,
                    id_beanominal: req.id_beanominal
                },
                include:[{
                    model: AuctionType, BeaNominal
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getAuctionApplFeeById = (req, res) => {
   
}

export const createAuctionApplFee = (req, res) => {
    
}

export const updateAuctionApplFee = (req, res) => {
    
}

export const deleteAuctionApplFee = (req, res) => {
    
}