import express from "express";
import {
    getAuctionApplFee,
    getAuctionApplFeeById,
    createAuctionApplFee,
    updateAuctionApplFee,
    deleteAuctionApplFee
} from "../controllers/AuctionApplFee.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mauction_appl_fee',verifyUser, getAuctionApplFee);
router.get('/mauction_appl_fee/:id',verifyUser, getAuctionApplFeeById);
router.post('/mauction_appl_fee',verifyUser, createAuctionApplFee);
router.patch('/mauction_appl_fee/:id',verifyUser, updateAuctionApplFee);
router.delete('/mauction_appl_fee/:id',verifyUser, deleteAuctionApplFee);

export default router;