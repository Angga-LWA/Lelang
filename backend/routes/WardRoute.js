import express from "express";
import {
    getWard,
    getWardById,
    createWard,
    updateWard,
    deleteWard
} from "../controllers/Ward.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mward',verifyUser, getWard);
router.get('/mward/:id',verifyUser, getWardById);
router.post('/mward',verifyUser, createWard);
router.patch('/mward/:id',verifyUser, updateWard);
router.delete('/mward/:id',verifyUser, deleteWard);

export default router;