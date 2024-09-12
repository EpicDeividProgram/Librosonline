import express from 'express';
import { Category } from './model.js'; // Importación relativa del modelo

export const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
    const category = await Category.findAll();
    res.json(category);
});
