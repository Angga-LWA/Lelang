import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";
import { verifyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get('/mproduct',verifyToken, getProducts);
router.get('/mproduct/:id',verifyToken, getProductById);
router.post('/mproduct',verifyToken, createProduct);
router.patch('/mproduct/:id',verifyToken, updateProduct);
router.delete('/mproduct/:id',verifyToken, deleteProduct);

export default router;