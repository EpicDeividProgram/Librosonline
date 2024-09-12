import express from 'express';
import { Author } from './model.js'; // Importación relativa del modelo


export const authorRouter = express.Router();

authorRouter.get('/', async (req, res) => {
    const authors = await Author.findAll();
    res.json(authors);
});
