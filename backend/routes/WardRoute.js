import express from "express";
import {
    getWard,
    getWardById,
    createWard,
    updateWard,
    deleteWard
} from "../controllers/Ward.js";

const router = express.Router();

router.get('/mward', getWard);
router.get('/mward/:id', getWardById);
router.post('/mward', createWard);
router.patch('/mward/:id', updateWard);
router.delete('/mward/:id', deleteWard);

export default router;