import Product from "../models/ProductModel.js";
import Branch from "../models/BranchModel.js";
import Category from "../models/CategoryModel.js";
import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";

export const getProducts = async (req, res) =>{
   try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                include:[{
                    model: Branch, Category, Entity, Region
                }]
            });
        }else{
            response = await Product.findAll({
                where:{
                    id_branch: req.id_branch,
                    id_category: req.id_category,
                    id_entity: req.id_entity,
                    id_region: req.id_region
                },
                include:[{
                    model: Branch, Category, Entity, Region
                }]
            });
        }
   } catch (error) {
    
   }
}

export const getProductById = (req, res) => {
   
}

export const createProduct = (req, res) => {
    
}

export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {
    
}