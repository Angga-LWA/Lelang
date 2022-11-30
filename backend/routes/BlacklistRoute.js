import express from "express";
import {
    getBlacklist,
    getBlacklistById,
    createBlacklist,
    updateBlacklist,
    deleteBlaclist
} from "../controllers/Blacklist.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mblack_list',verifyUser, getBlacklist);
router.get('/mblack_list/:id',verifyUser, getBlacklistById);
router.post('/mblack_list',verifyUser, createBlacklist);
router.patch('/mblack_list/:id',verifyUser, updateBlacklist);
router.delete('/mblack_list/:id',verifyUser, deleteBlaclist);

export default router;