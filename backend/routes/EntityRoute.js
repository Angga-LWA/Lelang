import express from "express";
import {
    getEntity,
    getEntityById,
    createEntity,
    updateEntity,
    deleteEntity
} from "../controllers/Entity.js";

const router = express.Router();

router.get('/mentity', getEntity);
router.get('/mentity/:id', getEntityById);
router.post('/mentity', createEntity);
router.patch('/mentity/:id', updateEntity);
router.delete('/mentity/:id', deleteEntity);

export default router;