import FailedJob from "../models/FailedJobModel.js";

export const getFailedJobs = async (req, res) => {
    try {
        const response = await FailedJob.findAll({
            attributes:['uuid','connection','queue','payload','exception','failed_at']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getFailedJobById = (req, res) => {
   
}

export const createFailedJob = (req, res) => {
    
}

export const updateFailedJob = (req, res) => {
    
}

export const deleteFailedJob = (req, res) => {
    
}