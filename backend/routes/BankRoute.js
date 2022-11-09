import express from "express";
import {
    getBanks,
    getBankById,
    createBank,
    updateBank,
    deleteBank
} from "../controllers/Bank.js";

const router = express.Router();

router.get('/mbank', getBanks);
router.get('/mbank/:id', getBankById);
router.post('/mbank', createBank);
router.patch('/mbank/:id', updateBank);
router.delete('/mbank/:id', deleteBank);

export default router;