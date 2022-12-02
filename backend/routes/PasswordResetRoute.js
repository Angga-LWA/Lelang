import express from "express";
import {
    getPasswordReset,
    getPasswordResetById,
    createPasswordReset,
    updatePasswordReset,
    deletePasswordReset
} from "../controllers/PasswordReset.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/password_resets',verifyUser, getPasswordReset);
router.get('/password_resets/:id',verifyUser, getPasswordResetById);
router.post('/password_resets',verifyUser, createPasswordReset);
router.patch('/password_resets/:id',verifyUser, updatePasswordReset);
router.delete('/password_resets/:id',verifyUser, deletePasswordReset);

export default router;