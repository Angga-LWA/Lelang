import Region from "../models/RegionModel.js";
import argon2 from "argon2";

export const getRegions = async(req, res) => {
   try {
    const response = await Category.findAll({
        attributes:['regioncode','regionname','created_by']
    });
    res.status(200).json(response);
   } catch (error) {
    res.status(500).json({msg: error.message});
   }
}

export const getRegionById = async(req, res) => {
    try {
        const response = await Category.findOne({
            attributes:['regioncode','regionname','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createRegion = (req, res) => {
    
}

export const updateRegion = (req, res) => {
    
}

export const deleteRegion = (req, res) => {
    
}