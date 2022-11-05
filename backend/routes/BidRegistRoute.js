import express from "express";
import {
    getBidRegist,
    getBidRegistById,
    createBidRegist,
    updateBidRegist,
    deleteBidRegist
} from "../controllers/BidRegist.js";

const router = express.Router();

router.get('/tbid_regist', getBidRegist);
router.get('/tbid_regist/:id', getBidRegistById);
router.post('/tbid_regist', createBidRegist);
router.patch('/tbid_regist/:id', updateBidRegist);
router.delete('/tbid_regist/:id', deleteBidRegist);

export default router;