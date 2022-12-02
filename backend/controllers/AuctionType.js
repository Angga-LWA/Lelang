import AuctionType from "../models/AuctionTypeModel.js";

export const getAuctionType = async (req, res) => {
    try {
        const response = await AuctionType.findAll({
            attributes:['type_name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getAuctionTypeById = (req, res) => {
   
}

export const createAuctionType = (req, res) => {
    
}

export const updateAuctionType = (req, res) => {
    
}

export const deleteAuctionType = (req, res) => {
    
}