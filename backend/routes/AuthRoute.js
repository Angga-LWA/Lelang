import express from "express";
import {
    Login,
    logOut
} from "../controllers/Auth.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken);
router.post('/login', Login);
router.delete('/logout', logOut);
router.get('/token', refreshToken);

export default router;