import Migrations from "../models/MigrationsModel.js";

export const getMigrations = async (req, res) => {
    try {
        const response = await Migrations.findAll({
            attributes:['migration','batch']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getMigrationById = (req, res) => {
   
}

export const createMigration = (req, res) => {
    
}

export const updateMigration = (req, res) => {
    
}

export const deleteMigration = (req, res) => {
    
}