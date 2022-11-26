import express from "express";
import {
    Login,
    logOut,
    Me
} from "../controllers/Auth.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verifyUser, adminOnly } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/users', verifyToken);
router.get('/me', Me);
router.post('/login', Login);
router.delete('/logout', logOut);
router.get('/token', refreshToken);

export default router;