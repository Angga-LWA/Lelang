import Ppn from "../models/PpnModel.js";

export const getPpn = async (req, res) => {
    try {
        const response = await Ppn.findAll({
            attributes:['ppn']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPpnById = (req, res) => {
   
}

export const createPpn = (req, res) => {
    
}

export const updatePpn = (req, res) => {
    
}

export const deletePpn = (req, res) => {
    
}