import Entity from "../models/EntityModel.js";
import argon2 from "argon2";

export const getEntity = async(req, res) => {
   try {
    const response = await Entity.findAll({
        attributes:['entitycode','entityname','created_by']
    });
    res.status(200).json(response);
   } catch (error) {
    res.status(500).json({msg: error.message});
   }
}

export const getEntityById = async(req, res) => {
    try {
        const response = await Entity.findOne({
            attributes:['entitycode','entityname','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createEntity = (req, res) => {
    
}

export const updateEntity = (req, res) => {
    
}

export const deleteEntity = (req, res) => {
    
}