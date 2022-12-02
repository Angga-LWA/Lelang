import express from "express";
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/Category.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mcategory',verifyUser, getCategories);
router.get('/mcategory/:id',verifyUser, getCategoryById);
router.post('/mcategory',verifyUser, createCategory);
router.patch('/mcategory/:id',verifyUser, updateCategory);
router.delete('/mcategory/:id',verifyUser, deleteCategory);

export default router;