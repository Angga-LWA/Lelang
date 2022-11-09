import express from "express";
import {
    getBeaType,
    getBeaTypeById,
    createBeaType,
    updateBeaType,
    deleteBeaType
} from "../controllers/BeaType.js";

const router = express.Router();

router.get('/mbea_type', getBeaType);
router.get('/mbea_type/:id', getBeaTypeById);
router.post('/mbea_type', createBeaType);
router.patch('/mbea_type/:id', updateBeaType);
router.delete('/mbea_type/:id', deleteBeaType);

export default router;