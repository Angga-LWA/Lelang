import express from "express";
import {
    getBidOrd,
    getBidOrdById,
    createBidOrd,
    updateBidOrd,
    deleteBidOrd
} from "../controllers/BidOrd.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/tbid_ord',verifyUser, getBidOrd);
router.get('/tbid_ord/:id',verifyUser, getBidOrdById);
router.post('/tbid_ord',verifyUser, createBidOrd);
router.patch('/tbid_ord/:id',verifyUser, updateBidOrd);
router.delete('/tbid_ord/:id',verifyUser, deleteBidOrd);

export default router;