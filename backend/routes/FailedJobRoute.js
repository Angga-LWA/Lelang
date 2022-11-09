import express from "express";
import {
    getFailedJobs,
    getFailedJobById,
    createFailedJob,
    updateFailedJob,
    deleteFailedJob
} from "../controllers/FailedJob.js";

const router = express.Router();

router.get('/failed_jobs', getFailedJobs);
router.get('/failed_jobs/:id', getFailedJobById);
router.post('/failed_jobs', createFailedJob);
router.patch('/failed_jobs/:id', updateFailedJob);
router.delete('/failed_jobs/:id', deleteFailedJob);

export default router;