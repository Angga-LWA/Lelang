import Ward from "../models/WardModel.js";
import Branch from "../models/BranchModel.js";
import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";
import { Op } from "sequelize";

export const getWard = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Ward.findAll({
                attributes:['wardcode','wardname'],
                include:[{
                    model: Branch, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }else{
            response = await Ward.findAll({
                attributes:['wardcode','wardname'],
                where:{
                    id_branch: req.id_branch,
                    id_entity: req.id_entity,
                    id_region: req.id_region
                },
                include:[{
                    model: Branch, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getWardById = async (req, res) => {
   try {
        const ward = await Ward.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!ward) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Ward.findOne({
                attributes:['wardcode','wardname'],
                where:{
                    id: ward.id
                },
                include:[{
                    model: Branch, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }else{
            response = await Ward.findOne({
                attributes:['wardcode','wardname'],
                where:{
                    [Op.and]:[{id: ward.id}, {id_branch: req.id_branch, id_entity: req.id_entity, id_region: req.id_region}]
                },
                include:[{
                    model: Branch, Entity, Region,
                    attributes:['branchcode','branchname']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const createWard = async (req, res) => {
    const {wardcode, wardname, created_by} = req.body;
    try {
        await Ward.create({
            id_region: req.id_region,
            id_entity: req.id_entity,
            id_branch: req.id_branch,
            wardcode: wardcode,
            wardname: wardname,
            created_by: created_by
        });
        res.status(201).json({msg: "Ward Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateWard = async (req, res) => {
    try {
        const ward = await Ward.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!ward) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {wardcode, wardname, created_by} = req.body;
        if(req.role === "admin"){
            await Ward.update({wardcode, wardname, created_by},{
                where: {
                    id: ward.id
                }
            });
        }else{
            if(req.id_region !== ward.id_region) return res.status(403).json({msg: "Akses Terlarang"});
            await Ward.update({wardcode, wardname, created_by},{
                where:{
                    [Op.and]:[{id: ward.id}, {id_branch: req.id_branch, id_entity: req.id_entity, id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Ward Updated Successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const deleteWard = async (req, res) => {
    try {
        const ward = await Ward.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!ward) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {wardcode, wardname, created_by} = req.body;
        if(req.role === "admin"){
            await Ward.destroy({
                where:{
                    id: ward.id
                }
            });
        }else{
            if(req.id_region !== ward.id_region) return res.status(403).json({msg: "Akses Terlarang"});
            await Ward.destroy({
                where:{
                    [Op.and]:[{id: ward.id}, {id_branch: req.id_branch, id_entity: req.id_entity, id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Ward deleted successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}