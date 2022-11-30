import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";

export const getEntity = async(req, res) => {
    try {
        let response;
        if(req.role === "admin"){
            response = await Entity.findAll({
                include:[{
                    model: Region
                }]
            });
        }else{
            response = await Entity.findAll({
                where:{
                    id_region: req.id_region
                },
                include:[{
                    model: Region
                }]
            });
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getEntityById = (req, res) => {
   
}

export const createEntity = (req, res) => {
    
}

export const updateEntity = (req, res) => {
    
}

export const deleteEntity = (req, res) => {
    
}