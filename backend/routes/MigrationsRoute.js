import express from "express";
import {
    getMigrations,
    getMigrationById,
    createMigration,
    updateMigration,
    deleteMigration
} from "../controllers/Migrations.js";

const router = express.Router();

router.get('/migrations', getMigrations);
router.get('/migrations/:id', getMigrationById);
router.post('/migrations', createMigration);
router.patch('/migrations/:id', updateMigration);
router.delete('/migrations/:id', deleteMigration);

export default router;