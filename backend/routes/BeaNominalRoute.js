import express from "express";
import {
    getBeaNominal,
    getBeaNominalById,
    createBeaNominal,
    updateBeaNominal,
    deleteBeaNominal
} from "../controllers/BeaNominal.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mbea_nominal',verifyUser, getBeaNominal);
router.get('/mbea_nominal/:id',verifyUser, getBeaNominalById);
router.post('/mbea_nominal',verifyUser, createBeaNominal);
router.patch('/mbea_nominal/:id',verifyUser, updateBeaNominal);
router.delete('/mbea_nominal/:id',verifyUser, deleteBeaNominal);

export default router;