import express from 'express';
import { Author } from 'model.js'; // Importar el modelo

export const authorRouter = express.Router();

authorRouter.get('/', async (req, res) => {
    const authors = await Author.findAll();
    res.json(authors);
});
