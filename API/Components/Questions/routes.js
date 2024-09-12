/*import express from 'express';
import { Questions } from './model.js'; // Importación relativa del modelo

export const questionsRouter = express.Router();

questionsRouter.get('/', async (req, res) => {
    const questions = await Questions.findAll();
    res.json(questions);
});*/

import express from 'express';
import { Questions } from './model.js';

export const questionsRouter = express.Router();

questionsRouter.get('/', async (req, res) => {
    try {
        const questions = await Questions.findAll();
        res.json(questions);
    } catch (error) {
        console.error('Error fetching questions:', error);
        res.status(500).json({ message: 'Error fetching questions' });
    }
});

