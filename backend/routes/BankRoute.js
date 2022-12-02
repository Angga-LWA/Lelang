import express from "express";
import {
    getBanks,
    getBankById,
    createBank,
    updateBank,
    deleteBank
} from "../controllers/Bank.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mbank',verifyUser, getBanks);
router.get('/mbank/:id',verifyUser, getBankById);
router.post('/mbank',verifyUser, createBank);
router.patch('/mbank/:id',verifyUser, updateBank);
router.delete('/mbank/:id',verifyUser, deleteBank);

export default router;