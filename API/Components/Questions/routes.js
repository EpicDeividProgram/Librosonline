import express from 'express';
import { Questions } from 'model.js'; // Importar el modelo

export const questionsRouter = express.Router();

questionsRouter.get('/', async (req, res) => {
    const questions = await Questions.findAll();
    res.json(questions);
});
