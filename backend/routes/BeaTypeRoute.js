import express from "express";
import {
    getBeaType,
    getBeaTypeById,
    createBeaType,
    updateBeaType,
    deleteBeaType
} from "../controllers/BeaType.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mbea_type',verifyUser, getBeaType);
router.get('/mbea_type/:id',verifyUser, getBeaTypeById);
router.post('/mbea_type',verifyUser, createBeaType);
router.patch('/mbea_type/:id',verifyUser, updateBeaType);
router.delete('/mbea_type/:id',verifyUser, deleteBeaType);

export default router;