import express from "express";
import {
    getAuctionType,
    getAuctionTypeById,
    createAuctionType,
    updateAuctionType,
    deleteAuctionType
} from "../controllers/AuctionType.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mauction_type',verifyUser, getAuctionType);
router.get('/mauction_type/:id',verifyUser, getAuctionTypeById);
router.post('/mauction_type',verifyUser, createAuctionType);
router.patch('/mauction_type/:id',verifyUser, updateAuctionType);
router.delete('/mauction_type/:id',verifyUser, deleteAuctionType);

export default router;