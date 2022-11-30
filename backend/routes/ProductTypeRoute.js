import express from "express";
import {
    getProductsType,
    getProductTypeById,
    createProductType,
    updateProductType,
    deleteProductType
} from "../controllers/ProductType.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mproduct_type',verifyUser, getProductsType);
router.get('/mproduct_type/:id',verifyUser, getProductTypeById);
router.post('/mproduct_type',verifyUser, createProductType);
router.patch('/mproduct_type/:id',verifyUser, updateProductType);
router.delete('/mproduct_type/:id',verifyUser, deleteProductType);

export default router;