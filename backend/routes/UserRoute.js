import express from "express";
import {
    getUsers,
    getUserById,
    Register,
    updateUser,
    deleteUser
} from "../controllers/Users.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', Register);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;