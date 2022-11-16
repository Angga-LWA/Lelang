import Product from "../models/ProductModel.js";
import User from "../models/UserModel.js";

export const getProducts = async(req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            const response = await Product.findAll({
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

export const getProductById = (req, res) => {
   
}

export const createProduct = async(req, res) => {
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
        res.status(201).json({msg: "Sukses daftar product"});
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

export const updateProduct = (req, res) => {
    
}

export const deleteProduct = (req, res) => {
    
}