import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mproduct',verifyUser, getProducts);
router.get('/mproduct/:id',verifyUser, getProductById);
router.post('/mproduct',verifyUser, createProduct);
router.patch('/mproduct/:id',verifyUser, updateProduct);
router.delete('/mproduct/:id',verifyUser, deleteProduct);

export default router;