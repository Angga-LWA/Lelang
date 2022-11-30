import Ward from "../models/WardModel.js";
import Branch from "../models/BranchModel.js";
import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";

export const getWard = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Ward.findAll({
                include:[{
                    model: Branch, Entity, Region
                }]
            });
        }else{
            response = await Ward.findAll({
                where:{
                    id_branch: req.id_branch,
                    id_entity: req.id_entity,
                    id_region: req.id_region
                },
                include:[{
                    model: Branch, Entity, Region
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getWardById = (req, res) => {
   
}

export const createWard = (req, res) => {
    
}

export const updateWard = (req, res) => {
    
}

export const deleteWard = (req, res) => {
    
}