import express from "express";
import {
    getFailedJobs,
    getFailedJobById,
    createFailedJob,
    updateFailedJob,
    deleteFailedJob
} from "../controllers/FailedJob.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/failed_jobs',verifyUser, getFailedJobs);
router.get('/failed_jobs/:id',verifyUser, getFailedJobById);
router.post('/failed_jobs',verifyUser, createFailedJob);
router.patch('/failed_jobs/:id',verifyUser, updateFailedJob);
router.delete('/failed_jobs/:id',verifyUser, deleteFailedJob);

export default router;