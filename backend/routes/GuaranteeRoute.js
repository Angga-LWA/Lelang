import express from "express";
import {
    getGuarantee,
    getGuaranteeById,
    createGuarantee,
    updateGuarantee,
    deleteGuarantee
} from "../controllers/Guarantee.js";

const router = express.Router();

router.get('/tguarantee', getGuarantee);
router.get('/tguarantee/:id', getGuaranteeById);
router.post('/tguarantee', createGuarantee);
router.patch('/tguarantee/:id', updateGuarantee);
router.delete('/tguarantee/:id', deleteGuarantee);

export default router;