import express from 'express';
import { login, logout } from './auth.controller.js';
import { authenticateToken } from './auth.middleware.js';

const router = express.Router();

// Ruta para iniciar sesión
router.post('/login', login);

// Ruta para cerrar sesión
router.post('/logout', authenticateToken, logout);

export const authRouter = router;
