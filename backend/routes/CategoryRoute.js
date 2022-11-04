import express from "express";
import {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
} from "../controllers/Category.js";

const router = express.Router();

router.get('/mcategory', getCategories);
router.get('/mcategory/:id', getCategoryById);
router.post('/mcategory', createCategory);
router.patch('/mcategory/:id', updateCategory);
router.delete('/mcategory/:id', deleteCategory);

export default router;