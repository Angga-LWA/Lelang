import express from "express";
import {
    getPersonalAccessTokens,
    getPersonalAccessTokenById,
    createPersonalAccessToken,
    updatePersonalAccessToken,
    deletePersonalAccessToken
} from "../controllers/PersonalAccessToken.js";

const router = express.Router();

router.get('/personal_access_tokens', getPersonalAccessTokens);
router.get('/personal_access_tokens/:id', getPersonalAccessTokenById);
router.post('/personal_access_tokens', createPersonalAccessToken);
router.patch('/personal_access_tokens/:id', updatePersonalAccessToken);
router.delete('/personal_access_tokens/:id', deletePersonalAccessToken);

export default router;