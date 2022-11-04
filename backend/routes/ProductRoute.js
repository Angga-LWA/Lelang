import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/Products.js";

const router = express.Router();

router.get('/mproduct', getProducts);
router.get('/mproduct/:id', getProductById);
router.post('/mproduct', createProduct);
router.patch('/mproduct/:id', updateProduct);
router.delete('/mproduct/:id', deleteProduct);

export default router;