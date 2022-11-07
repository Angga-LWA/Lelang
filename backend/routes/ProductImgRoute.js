import express from "express";
import {
    getProductsImg,
    getProductImgById,
    createProductImg,
    updateProductImg,
    deleteProductImg
} from "../controllers/ProductImg.js";

const router = express.Router();

router.get('/mproduct_img', getProductsImg);
router.get('/mproduct_img/:id', getProductImgById);
router.post('/mproduct_img', createProductImg);
router.patch('/mproduct_img/:id', updateProductImg);
router.delete('/mproduct_img/:id', deleteProductImg);

export default router;