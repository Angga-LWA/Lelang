import express from "express";
import {
    getRegions,
    getRegionById,
    createRegion,
    updateRegion,
    deleteRegion
} from "../controllers/Region.js";

const router = express.Router();

router.get('/mregion', getRegions);
router.get('/mregion/:id', getRegionById);
router.post('/mregion', createRegion);
router.patch('/mregion/:id', updateRegion);
router.delete('/mregion/:id', deleteRegion);

export default router;