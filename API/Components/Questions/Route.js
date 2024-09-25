import express from 'express';
import { Questions } from './Model.js';
import { controllerQ } from './Controller.js';  // Controlador para Questions

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

questionsRouter.get('/', controllerQ.getAllQuestions);              // Obtener todas las preguntas
questionsRouter.get('/search/:id', controllerQ.searchQuestion);      // Buscar pregunta por ID
questionsRouter.post('/add', controllerQ.addQuestions);              // Agregar nueva pregunta
questionsRouter.put('/update/:id', controllerQ.updateQuestions);     // Actualizar pregunta por ID
questionsRouter.delete('/delete/:id', controllerQ.deleteQuestions);  // Eliminar pregunta por ID
questionsRouter.get('/filter/:description', controllerQ.filterQuestions); // Filtrar preguntas por descripción
