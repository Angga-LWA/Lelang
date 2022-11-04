import Branch from "../models/BranchModel.js";
import argon2 from "argon2";

export const getBranch = async(req, res) => {
   try {
    const response = await Branch.findAll({
        attributes:['branchcode','branchname','created_by']
    });
    res.status(200).json(response);
   } catch (error) {
    res.status(500).json({msg: error.message});
   }
}

export const getBranchById = async(req, res) => {
    try {
        const response = await Branch.findOne({
            attributes:['branchcode','branchname','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createBranch = (req, res) => {
    
}

export const updateBranch = (req, res) => {
    
}

export const deleteBranch = (req, res) => {
    
}