import express from "express";
import {
    getBranch,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
} from "../controllers/Branch.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mbranch',verifyUser, getBranch);
router.get('/mbranch/:id',verifyUser, getBranchById);
router.post('/mbranch',verifyUser, createBranch);
router.patch('/mbranch/:id',verifyUser, updateBranch);
router.delete('/mbranch/:id',verifyUser, deleteBranch);

export default router;