import ProductType from "../models/ProductTypeModel.js";
import AuctionType from "../models/AuctionTypeModel.js";

export const getProductsType = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await ProductType.findAll({
                include:[{
                    model: AuctionType
                }]
            });
        }else{
            response = await ProductType.findAll({
                where:{
                    id_auctiontype: req.id_auctiontype
                },
                include:[{
                    model: AuctionType
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getProductTypeById = (req, res) => {
   
}

export const createProductType = (req, res) => {
    
}

export const updateProductType = (req, res) => {
    
}

export const deleteProductType = (req, res) => {
    
}