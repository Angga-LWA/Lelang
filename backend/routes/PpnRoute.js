import express from "express";
import {
    getPpn,
    getPpnById,
    createPpn,
    updatePpn,
    deletePpn
} from "../controllers/Ppn.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mppn',verifyUser, getPpn);
router.get('/mppn/:id',verifyUser, getPpnById);
router.post('/mppn',verifyUser, createPpn);
router.patch('/mppn/:id',verifyUser, updatePpn);
router.delete('/mppn/:id',verifyUser, deletePpn);

export default router;