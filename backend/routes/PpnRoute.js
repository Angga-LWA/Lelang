import express from "express";
import {
    getPpn,
    getPpnById,
    createPpn,
    updatePpn,
    deletePpn
} from "../controllers/Ppn.js";

const router = express.Router();

router.get('/mppn', getPpn);
router.get('/mppn/:id', getPpnById);
router.post('/mppn', createPpn);
router.patch('/mppn/:id', updatePpn);
router.delete('/mppn/:id', deletePpn);

export default router;