import express from "express";
import {
    getBidLogs,
    getBidLogsById,
    createBidLogs,
    updateBidLogs,
    deleteBidLogs
} from "../controllers/BidLogs.js";

const router = express.Router();

router.get('/tbid_logs', getBidLogs);
router.get('/tbid_logs/:id', getBidLogsById);
router.post('/tbid_logs', createBidLogs);
router.patch('/tbid_logs/:id', updateBidLogs);
router.delete('/tbid_logs/:id', deleteBidLogs);

export default router;