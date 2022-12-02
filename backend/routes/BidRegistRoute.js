import express from "express";
import {
    getBidRegist,
    getBidRegistById,
    createBidRegist,
    updateBidRegist,
    deleteBidRegist
} from "../controllers/BidRegist.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/tbid_regist',verifyUser, getBidRegist);
router.get('/tbid_regist/:id',verifyUser, getBidRegistById);
router.post('/tbid_regist',verifyUser, createBidRegist);
router.patch('/tbid_regist/:id',verifyUser, updateBidRegist);
router.delete('/tbid_regist/:id',verifyUser, deleteBidRegist);

export default router;