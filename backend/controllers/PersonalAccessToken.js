import PersonalAccessToken from "../models/PersonalAccessTokenModel.js";

export const getPersonalAccessTokens = async (req, res) => {
    try {
        const response = await PersonalAccessToken.findAll({
            attributes:['tokenable_type','tokenable_id','name','token','abilities','last_used_at','expires_at']
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg: error.message});
    }
}

export const getPersonalAccessTokenById = (req, res) => {
   
}

export const createPersonalAccessToken = (req, res) => {
    
}

export const updatePersonalAccessToken = (req, res) => {
    
}

export const deletePersonalAccessToken = (req, res) => {
    
}