import express from "express";
import {
    getBidLogs,
    getBidLogsById,
    createBidLogs,
    updateBidLogs,
    deleteBidLogs
} from "../controllers/BidLogs.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/tbid_logs',verifyUser, getBidLogs);
router.get('/tbid_logs/:id',verifyUser, getBidLogsById);
router.post('/tbid_logs',verifyUser, createBidLogs);
router.patch('/tbid_logs/:id',verifyUser, updateBidLogs);
router.delete('/tbid_logs/:id',verifyUser, deleteBidLogs);

export default router;