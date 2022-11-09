import express from "express";
import {
    getPasswordReset,
    getPasswordResetById,
    createPasswordReset,
    updatePasswordReset,
    deletePasswordReset
} from "../controllers/PasswordReset.js";

const router = express.Router();

router.get('/password_resets', getPasswordReset);
router.get('/password_resets/:id', getPasswordResetById);
router.post('/password_resets', createPasswordReset);
router.patch('/password_resets/:id', updatePasswordReset);
router.delete('/password_resets/:id', deletePasswordReset);

export default router;