import express from "express";
import {
    getGuarantee,
    getGuaranteeById,
    createGuarantee,
    updateGuarantee,
    deleteGuarantee
} from "../controllers/Guarantee.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/tguarantee',verifyUser, getGuarantee);
router.get('/tguarantee/:id',verifyUser, getGuaranteeById);
router.post('/tguarantee',verifyUser, createGuarantee);
router.patch('/tguarantee/:id',verifyUser, updateGuarantee);
router.delete('/tguarantee/:id',verifyUser, deleteGuarantee);

export default router;