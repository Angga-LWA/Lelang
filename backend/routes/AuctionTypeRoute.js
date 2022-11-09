import express from "express";
import {
    getAuctionType,
    getAuctionTypeById,
    createAuctionType,
    updateAuctionType,
    deleteAuctionType
} from "../controllers/AuctionType.js";

const router = express.Router();

router.get('/mauction_type', getAuctionType);
router.get('/mauction_type/:id', getAuctionTypeById);
router.post('/mauction_type', createAuctionType);
router.patch('/mauction_type/:id', updateAuctionType);
router.delete('/mauction_type/:id', deleteAuctionType);

export default router;