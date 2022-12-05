import ProductImg from "../models/ProductImgModel.js";
import Product from "../models/ProductModel.js";
import {Op} from "sequelize";

export const getProductsImg = async (req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await ProductImg.findAll({
                attributes:['prdimg','created_by'],
                include:[{
                    model: Product,
                    attributes:['prdcode','prdname','prddesc']
                }]
            });
        }else{
            response = await ProductImg.findAll({
                attributes:['prdimg','created_by'],
                where:{
                    id_product: req.id_product
                },
                include:[{
                    model: Product,
                    attributes:['prdcode','prdname','prddesc']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getProductImgById = async (req, res) => {
    try {
        const productimg = await ProductImg.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!productimg) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await ProductImg.findOne({
                attributes:['prdimg','created_by'],
                where:{
                    id: productimg.id
                },
                include:[{
                    model: Product,
                    attributes:['prdcode','prdname','prddesc']
                }]
            });
        }else{
            response = await ProductImg.findOne({
                attributes:['prdimg','created_by'],
                where:{
                    [Op.and]:[{id: productimg.id}, {id_product: req.id_product}]
                },
                include:[{
                    model: Product,
                    attributes:['prdcode','prdname','prddesc']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createProductImg = async (req, res) => {
    const {prdimg, created_by} = req.body;
    try {
        await ProductImg.create({
            id_product: req.id_product,
            prdimg: prdimg,
            created_by: created_by
        });
        res.status(201).json({msg: "Product Image Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProductImg = async (req, res) => {
    try {
        const productimg = await ProductImg.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!productimg) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {prdimg, created_by} = req.body;
        if(req.role === "admin"){
            await ProductImg.update({prdimg, created_by},{
                where:{
                    id: productimg.id
                }
            });
        }else{
            if(req.id_product !== productimg.id_product) return res.status(403).json({msg: "Akses Terlarang"});
            await ProductImg.update({prdimg, created_by},{
                where:{
                    [Op.and]:[{id: productimg.id}, {id_product: req.id_product}]
                }
            });
        }
        res.status(200).json({msg: "Product Image Updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteProductImg = async (req, res) => {
    try {
        const productimg = await ProductImg.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!productimg) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {prdimg, created_by} = req.body;
        if(req.role === "admin"){
            await ProductImg.destroy({
                where:{
                    id: productimg.id
                }
            });
        }else{
            if(req.id_product !== productimg.id_product) return res.status(403).json({msg: "Akses Terlarang"});
            await ProductImg.destroy({
                where:{
                    [Op.and]:[{id: productimg.id}, {id_product: req.id_product}]
                }
            });
        }
        res.status(200).json({msg: "Product Image Delete successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}