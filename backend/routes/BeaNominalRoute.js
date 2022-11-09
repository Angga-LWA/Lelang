import express from "express";
import {
    getBeaNominal,
    getBeaNominalById,
    createBeaNominal,
    updateBeaNominal,
    deleteBeaNominal
} from "../controllers/BeaNominal.js";

const router = express.Router();

router.get('/mbea_nominal', getBeaNominal);
router.get('/mbea_nominal/:id', getBeaNominalById);
router.post('/mbea_nominal', createBeaNominal);
router.patch('/mbea_nominal/:id', updateBeaNominal);
router.delete('/mbea_nominal/:id', deleteBeaNominal);

export default router;