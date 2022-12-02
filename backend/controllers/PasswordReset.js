import PasswordReset from "../models/PasswordResetModel.js";

export const getPasswordReset = async (req, res) => {
    try {
        const response = await PasswordReset.findAll({
            attributes:['email','token']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPasswordResetById = (req, res) => {
   
}

export const createPasswordReset = (req, res) => {
    
}

export const updatePasswordReset = (req, res) => {
    
}

export const deletePasswordReset = (req, res) => {
    
}