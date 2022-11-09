import express from "express";
import {
    getAuctionApplFee,
    getAuctionApplFeeById,
    createAuctionApplFee,
    updateAuctionApplFee,
    deleteAuctionApplFee
} from "../controllers/AuctionApplFee.js";

const router = express.Router();

router.get('/mauction_appl_fee', getAuctionApplFee);
router.get('/mauction_appl_fee/:id', getAuctionApplFeeById);
router.post('/mauction_appl_fee', createAuctionApplFee);
router.patch('/mauction_appl_fee/:id', updateAuctionApplFee);
router.delete('/mauction_appl_fee/:id', deleteAuctionApplFee);

export default router;