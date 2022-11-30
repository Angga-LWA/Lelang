import Branch from "../models/BranchModel.js";
import Entity from "../models/EntityModel.js";
import Region from "../models/RegionModel.js";

export const getBranch = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await Branch.findAll({
                include:[{
                    model: Entity, Region
                }]
            });
        }else{
            response = await Branch.findAll({
                where:{
                    id_entity: req.id_entity,
                    id_region: req.id_region
                },
                include:[{
                    model: Entity, Region
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getBranchById = (req, res) => {
   
}

export const createBranch = (req, res) => {
    
}

export const updateBranch = (req, res) => {
    
}

export const deleteBranch = (req, res) => {
    
}