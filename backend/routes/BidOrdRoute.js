import express from "express";
import {
    getBidOrd,
    getBidOrdById,
    createBidOrd,
    updateBidOrd,
    deleteBidOrd
} from "../controllers/BidOrd.js";

const router = express.Router();

router.get('/tbid_ord', getBidOrd);
router.get('/tbid_ord/:id', getBidOrdById);
router.post('/tbid_ord', createBidOrd);
router.patch('/tbid_ord/:id', updateBidOrd);
router.delete('/tbid_ord/:id', deleteBidOrd);

export default router;