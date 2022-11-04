import Category from "../models/CategoryModel.js";
import argon2 from "argon2";

export const getCategories = async(req, res) => {
   try {
    const response = await Category.findAll({
        attributes:['categorycode','categoryname','created_by']
    });
    res.status(200).json(response);
   } catch (error) {
    res.status(500).json({msg: error.message});
   }
}

export const getCategoryById = async(req, res) => {
    try {
        const response = await Category.findOne({
            attributes:['categorycode','categoryname','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createCategory = (req, res) => {
    
}

export const updateCategory = (req, res) => {
    
}

export const deleteCategory = (req, res) => {
    
}