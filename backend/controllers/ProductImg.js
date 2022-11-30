import ProductImg from "../models/ProductImgModel.js";
import Product from "../models/ProductModel.js";

export const getProductsImg = async (req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await ProductImg.findAll({
                include:[{
                    model: Product
                }]
            });
        }else{
            response = await ProductImg.findAll({
                where:{
                    id_product: req.id_product
                },
                include:[{
                    model: Product
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductImgById = (req, res) => {
   
}

export const createProductImg = (req, res) => {
    
}

export const updateProductImg = (req, res) => {
    
}

export const deleteProductImg = (req, res) => {
    
}