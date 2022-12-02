import BeaType from "../models/BeaTypeModel.js";
import ProductType from "../models/ProductTypeModel.js";

export const getBeaType = async (req, res) => {
   try {
        let response;
        if(req.role === "admin"){
            response = await BeaType.findAll({
                include:[{
                    model: ProductType
                }]
            });
        }else{
            response = await BeaType.findAll({
                where:{
                    id_prdtype: req.id_prdtype
                },
                include:[{
                    model: ProductType
                }]
            });
        }
        res.status(200).json(response);
   } catch (error) {
        res.status(500).json({msg: error.message});
   }
}

export const getBeaTypeById = (req, res) => {
   
}

export const createBeaType = (req, res) => {
    
}

export const updateBeaType = (req, res) => {
    
}

export const deleteBeaType = (req, res) => {
    
}