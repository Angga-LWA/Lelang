import ProductType from "../models/ProductTypeModel.js";
import AuctionType from "../models/AuctionTypeModel.js";
import {Op} from "sequelize";

export const getProductsType = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await ProductType.findAll({
                attributes:['type_prd'],
                include:[{
                    model: AuctionType,
                    attributes:['type_name']
                }]
            });
        }else{
            response = await ProductType.findAll({
                attributes:['type_prd'],
                where:{
                    id_auctiontype: req.id_auctiontype
                },
                include:[{
                    model: AuctionType,
                    attributes:['type_name']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getProductTypeById = async (req, res) => {
    try {
        const producttype = await ProductType.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!producttype) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await ProductType.findOne({
                attributes:['type_prd'],
                where:{
                    id: producttype.id
                },
                include:[{
                    model: AuctionType,
                    attributes:['type_name']
                }]
            });
        }else{
            response = await ProductType.findOne({
                attributes:['type_prd'],
                where:{
                    [Op.and]:[{id: producttype.id}, {id_auctiontype: req.id_auctiontype}]
                },
                include:[{
                    model: AuctionType,
                    attributes:['type_name']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const createProductType = async (req, res) => {
    const {type_prd} = req.body;
    try {
        await ProductType.create({
            id_auctiontype: req.id_auctiontype,
            type_prd: type_prd
        });
        res.status(201).json({msg: "Product Type Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateProductType = async (req, res) => {
    try {
        const producttype = await ProductType.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!producttype) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {type_prd} = req.body;
        if(req.role === "admin"){
            await ProductType.update({type_prd},{
                where:{
                    id: producttype.id
                }
            });
        }else{
            if(req.id_auctiontype !== producttype.id_auctiontype) return res.status(403).json({msg: "Akses Terlarang"});
            await ProductType.update({type_prd},{
                where:{
                    [Op.and]:[{id: producttype.id}, {id_auctiontype: req.id_auctiontype}]
                }
            });
        }
        res.status(200).json({msg: "Product Type Updated successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const deleteProductType = async (req, res) => {
    try {
        const producttype = await ProductType.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!producttype) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {type_prd} = req.body;
        if(req.role === "admin"){
            await ProductType.destroy({
                where:{
                    id: producttype.id
                }
            });
        }else{
            if(req.id_auctiontype !== producttype.id_auctiontype) return res.status(403).json({msg: "Akses Terlarang"});
            await ProductType.destroy({
                where:{
                    [Op.and]:[{id: producttype.id}, {id_auctiontype: req.id_auctiontype}]
                }
            });
        }
        res.status(200).json({msg: "Product Type Deleted successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}