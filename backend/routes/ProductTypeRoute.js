import express from "express";
import {
    getProductsType,
    getProductTypeById,
    createProductType,
    updateProductType,
    deleteProductType
} from "../controllers/ProductType.js";

const router = express.Router();

router.get('/mproduct_type', getProductsType);
router.get('/mproduct_type/:id', getProductTypeById);
router.post('/mproduct_type', createProductType);
router.patch('/mproduct_type/:id', updateProductType);
router.delete('/mproduct_type/:id', deleteProductType);

export default router;