import Product from "../models/ProductModel.js";
import Branch from "../models/BranchModel.js";
import Category from "../models/CategoryModel.js";
import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";
import {Op} from "sequelize";

export const getProducts = async (req, res) =>{
   try {
        let response;
        if(req.role === "admin"){
            response = await Product.findAll({
                attributes:['prdcode','prdname','prddesc'],
                include:[{
                    model: Branch, Category, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }else{
            response = await Product.findAll({
                attributes:['prdcode','prdname','prddesc'],
                where:{
                    id_branch: req.id_branch,
                    id_category: req.id_category,
                    id_entity: req.id_entity,
                    id_region: req.id_region
                },
                include:[{
                    model: Branch, Category, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Product.findOne({
                attributes:['prdcode','prdname','prddesc'],
                where:{
                    id: product.id
                },
                include:[{
                    model: Branch, Category, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }else{
            response = await Product.findOne({
                attributes:['prdcode','prdname','prddesc'],
                where:{
                    [Op.and]:[{id: product.id}, {id_branch: req.id_branch, id_category: req.id_category, id_entity: req.id_entity, id_region: req.id_region}]
                },
                include:[{
                    model: Branch, Category, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
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

export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {prdcode, prdname, prddesc, price, min_multiples, location, auction_date, created_by} = req.body;
        if(req.role === "admin"){
            await Product.update({prdcode, prdname, prddesc, price, min_multiples, location, auction_date, created_by},{
                where: {
                    id: product.id
                }
            });
        }else{
            if(req.id_branch !== product.id_branch) return res.status(403).json({msg: "Akses Terlarang"});
            await Product.update({prdcode, prdname, prddesc, price, min_multiples, location, auction_date, created_by},{
                where:{
                    [Op.and]:[{id: product.id}, {id_branch: req.id_branch, id_category: req.id_category, id_entity: req.id_entity, id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Product Updated successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!product) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {prdcode, prdname, prddesc, price, min_multiples, location, auction_date, created_by} = req.body;
        if(req.role === "admin"){
            await Product.destroy({
                where: {
                    id: product.id
                }
            });
        }else{
            if(req.id_branch !== product.id_branch) return res.status(403).json({msg: "Akses Terlarang"});
            await Product.destroy({
                where:{
                    [Op.and]:[{id: product.id}, {id_branch: req.id_branch, id_category: req.id_category, id_entity: req.id_entity, id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Product delete successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}