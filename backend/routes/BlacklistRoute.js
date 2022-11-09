import express from "express";
import {
    getBlacklist,
    getBlacklistById,
    createBlacklist,
    updateBlacklist,
    deleteBlaclist
} from "../controllers/Blacklist.js";

const router = express.Router();

router.get('/mblack_list', getBlacklist);
router.get('/mblack_list/:id', getBlacklistById);
router.post('/mblack_list', createBlacklist);
router.patch('/mblack_list/:id', updateBlacklist);
router.delete('/mblack_list/:id', deleteBlaclist);

export default router;