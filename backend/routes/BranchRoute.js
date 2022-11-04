import express from "express";
import {
    getBranch,
    getBranchById,
    createBranch,
    updateBranch,
    deleteBranch
} from "../controllers/Branch.js";

const router = express.Router();

router.get('/mbranch', getBranch);
router.get('/mbranch/:id', getBranchById);
router.post('/mbranch', createBranch);
router.patch('/mbranch/:id', updateBranch);
router.delete('/mbranch/:id', deleteBranch);

export default router;