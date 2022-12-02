import express from "express";
import {
    getPersonalAccessTokens,
    getPersonalAccessTokenById,
    createPersonalAccessToken,
    updatePersonalAccessToken,
    deletePersonalAccessToken
} from "../controllers/PersonalAccessToken.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/personal_access_tokens',verifyUser, getPersonalAccessTokens);
router.get('/personal_access_tokens/:id',verifyUser, getPersonalAccessTokenById);
router.post('/personal_access_tokens',verifyUser, createPersonalAccessToken);
router.patch('/personal_access_tokens/:id',verifyUser, updatePersonalAccessToken);
router.delete('/personal_access_tokens/:id',verifyUser, deletePersonalAccessToken);

export default router;