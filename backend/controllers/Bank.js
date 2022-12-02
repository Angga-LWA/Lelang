import Bank from "../models/BankModel.js";

export const getBanks = async (req, res) => {
    try {
        const response = await Bank.findAll({
            attributes:['type_name']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getBankById = (req, res) => {
   
}

export const createBank = (req, res) => {
    
}

export const updateBank = (req, res) => {
    
}

export const deleteBank = (req, res) => {
    
}