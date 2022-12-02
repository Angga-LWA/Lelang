import BeaNominal from "../models/BeaNominalModel.js";
import BeaType from "../models/BeaTypeModel.js";

export const getBeaNominal = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await BeaNominal.findAll({
                include:[{
                    model: BeaType
                }]
            });
        }else{
            response = await BeaNominal.findAll({
                where:{
                    id_beatype: req.id_beatype
                },
                include:[{
                    model: BeaType
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getBeaNominalById = (req, res) => {
   
}

export const createBeaNominal = (req, res) => {
    
}

export const updateBeaNominal = (req, res) => {
    
}

export const deleteBeaNominal = (req, res) => {
    
}