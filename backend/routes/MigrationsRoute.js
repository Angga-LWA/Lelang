import express from "express";
import {
    getMigrations,
    getMigrationById,
    createMigration,
    updateMigration,
    deleteMigration
} from "../controllers/Migrations.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/migrations',verifyUser, getMigrations);
router.get('/migrations/:id',verifyUser, getMigrationById);
router.post('/migrations',verifyUser, createMigration);
router.patch('/migrations/:id',verifyUser, updateMigration);
router.delete('/migrations/:id',verifyUser, deleteMigration);

export default router;