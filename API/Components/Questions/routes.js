import express from 'express';
import { Questions } from './model.js';
import { controllerQ } from './controller.js';

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

questionsRouter.get('/', authenticateToken, controllerQ.getAllQuestions);              // Obtener todas las preguntas
questionsRouter.get('/search/:id', authenticateToken,  controllerQ.searchQuestion);      // Buscar pregunta por ID
questionsRouter.post('/add', authenticateToken,  controllerQ.addQuestions);              // Agregar nueva pregunta
questionsRouter.put('/update/:id', authenticateToken,  controllerQ.updateQuestions);     // Actualizar pregunta por ID
questionsRouter.delete('/delete/:id', authenticateToken,  controllerQ.deleteQuestions);  // Eliminar pregunta por ID
questionsRouter.get('/filter/:description', authenticateToken, controllerQ.filterQuestions); // Filtrar preguntas por descripción
