import express from "express";
import {
    getProductsImg,
    getProductImgById,
    createProductImg,
    updateProductImg,
    deleteProductImg
} from "../controllers/ProductImg.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mproduct_img',verifyUser, getProductsImg);
router.get('/mproduct_img/:id',verifyUser, getProductImgById);
router.post('/mproduct_img',verifyUser, createProductImg);
router.patch('/mproduct_img/:id',verifyUser, updateProductImg);
router.delete('/mproduct_img/:id',verifyUser, deleteProductImg);

export default router;