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
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getProductById = (req, res) => {
   
}

export const createProduct = async (req, res) => {
    const {prdcode, prdname, prddesc, price, min_multiples, location, auction_date, created_by} = req.body;
    try {
        await Product.create({
            id_region: req.id_region,
            id_entity: req.id_entity,
            id_branch: req.id_branch,
            prdcode: prdcode,
            prdname: prdname,
            prddesc: prddesc,
            id_category: req.id_category,
            price: price,
            min_multiples: min_multiples,
            location: location,
            auction_date: auction_date,
            created_by: created_by
        });
        res.status(201).json({msg: "Product Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProduct = (req, res) => {

}

export const deleteProduct = (req, res) => {
    
}