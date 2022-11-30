import express from "express";
import {
    getEntity,
    getEntityById,
    createEntity,
    updateEntity,
    deleteEntity
} from "../controllers/Entity.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/mentity',verifyUser, getEntity);
router.get('/mentity/:id',verifyUser, getEntityById);
router.post('/mentity',verifyUser, createEntity);
router.patch('/mentity/:id',verifyUser, updateEntity);
router.delete('/mentity/:id',verifyUser, deleteEntity);

export default router;