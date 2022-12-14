import Region from "../models/RegionModel.js";

export const getRegions = async (req, res) => {
    try {
        const response = await Region.findAll({
            attributes:['regioncode','regionname','created_by']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getRegionById = async(req, res) => {
    try {
        const response = await Region.findOne({
            attributes:['regioncode','regionname','created_by'],
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const createRegion = (req, res) => {
    
}

export const updateRegion = (req, res) => {
    
}

export const deleteRegion = (req, res) => {
    
}