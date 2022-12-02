import express from "express";
import {
    getRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion
} from "../controllers/Region.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mregion',verifyUser, getRegions);
router.get('/mregion/:id',verifyUser, getRegionById);
router.post('/mregion',verifyUser, createRegion);
router.patch('/mregion/:id',verifyUser, updateRegion);
router.delete('/mregion/:id',verifyUser, deleteRegion);

export default router;