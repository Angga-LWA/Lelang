import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";
import { Op } from "sequelize";

export const getEntity = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Entity.findAll({
                attributes:['entitycode','entityname','created_by'],
                include:[{
                    model: Region,
                    attributes:['regioncode','regionname','created_by']
                }]
            });
        }else{
            response = await Entity.findAll({
                attributes:['entitycode','entityname','created_by'],
                where:{
                    id_region: req.id_region
                },
                include:[{
                    model: Region,
                    attributes:['regioncode','regionname','created_by']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getEntityById = async (req, res) => {
    try {
        const entity = await Entity.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!entity) return res.status(404).json({msg: "Data tidak ditemukan"});
        let response;
        if(req.role === "admin"){
            response = await Entity.findAll({
                attributes:['entitycode','entityname','created_by'],
                where:{
                    id: entity.id
                },
                include:[{
                    model: Region,
                    attributes:['regioncode','regionname','created_by']
                }]
            });
        }else{
            response = await Entity.findOne({
                attributes:['entitycode','entityname','created_by'],
                where:{
                    [Op.and]:[{id: entity.id}, {id_region: req.id_region}]
                },
                include:[{
                    model: Region,
                    attributes:['regioncode','regionname','created_by']
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createEntity = async (req, res) => {
    const {entitycode, entityname, created_by} = req.body
    try {
        await Entity.create({
            id_region: req.id_region,
            entitycode: entitycode,
            entityname: entityname,
            created_by: created_by
        });
        res.status(201).json({msg: "Entity Created Successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const updateEntity = async (req, res) => {
    try {
        const entity = await Entity.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!entity) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {entitycode, entityname, created_by} = req.body
        if(req.role === "admin"){
            await Entity.update({entitycode, entityname, created_by},{
                where:{
                    id: entity.id
                }
            });
        }else{
            if(req.id_region !== entity.id_region) return res.status(403).json({msg: "Akses Terlarang"});
            await Entity.update({entitycode, entityname, created_by},{
                where:{
                    [Op.and]:[{id: entity.id}, {id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Entity Updated successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const deleteEntity = async (req, res) => {
    try {
        const entity = await Entity.findOne({
            where:{
                id: req.params.id
            }
        });
        if(!entity) return res.status(404).json({msg: "Data tidak ditemukan"});
        const {entitycode, entityname, created_by} = req.body
        if(req.role === "admin"){
            await Entity.destroy({
                where:{
                    id: entity.id
                }
            });
        }else{
            if(req.id_region !== entity.id_region) return res.status(403).json({msg: "Akses Terlarang"});
            await Entity.update({
                where:{
                    [Op.and]:[{id: entity.id}, {id_region: req.id_region}]
                }
            });
        }
        res.status(200).json({msg: "Entity Deleted successfuly"});
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}