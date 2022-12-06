import Branch from "../models/BranchModel.js";
import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";
import { Op } from "sequelize";

export const getBranch = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Branch.findAll({
                attributes:['branchcode','branchname','created_by'],
                include:[{
                    model: Entity, Region,
                    attributes:['entitycode','entityname','created_by']
                }]
            });
        }else{
            response = await Branch.findAll({
                attributes:['branchcode','branchname','created_by'],
                where:{
                    id_entity: req.id_entity,
                    id_region: req.id_region
                },
                include:[{
                    model: Entity, Region,
                    attributes:['entitycode','entityname','created_by']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getBranchById = async (req, res) => {
    try {
        const branch = await Branch.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!branch) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Branch.findOne({
                attributes:['branchcode','branchname','created_by'],
                where:{
                    id: branch.id
                },
                include:[{
                    model: Entity, Region,
                    attributes:['entitycode','entityname','created_by']
                }]
            });
        }else{
            response = await Branch.findOne({
                attributes:['branchcode','branchname','created_by'],
                where:{
                    [Op.and]:[{id: branch.id}, {id_entity: req.id_entity, id_region: req.id_region}]
                },
                include:[{
                    model: Entity, Region,
                    attributes:['entitycode','entityname','created_by']
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const createBranch = async (req, res) => {
    const {branchcode, branchname, created_by} = req.body;
    try {
        await Branch.create({
            id_region: req.id_region,
            id_entity: req.id_entity,
            branchcode: branchcode,
            branchname: branchname,
            created_by: created_by
        });
        res.status(201).json({msg: "Branch Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateBranch = async (req, res) => {
    try {
        const branch = await Branch.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!branch) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {branchcode, branchname, created_by} = req.body;
        if(req.role === "admin"){
            await Branch.findOne({branchcode, branchname, created_by},{
                where:{
                    id: branch.id
                }
            });
        }else{
            if(req.id_entity !== branch.id_entity) return res.status(403).json({msg: "Akses Terlarang"});
            await Branch.findOne({branchcode, branchname, created_by},{
                where:{
                    [Op.and]:[{id: branch.id}, {id_entity: req.id_entity, id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Branch Updated successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const deleteBranch = async (req, res) => {
    try {
        const branch = await Branch.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!branch) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {branchcode, branchname, created_by} = req.body;
        if(req.role === "admin"){
            await Branch.destroy({
                where:{
                    id: branch.id
                }
            });
        }else{
            if(req.id_entity !== branch.id_entity) return res.status(403).json({msg: "Akses Terlarang"});
            await Branch.destroy({
                where:{
                    [Op.and]:[{id: branch.id}, {id_entity: req.id_entity, id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Branch Deleted successfuly"});
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}