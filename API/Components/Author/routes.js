import express from 'express';
import { Author } from './model.js';
import { controllerA } from './controller.js';
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';


export const authorRouter = express.Router();

authorRouter.get('/', async (req, res) => {
    const authors = await Author.findAll();
    res.json(authors);
});


// Rutas CRUD para Author
authorRouter.get('/', authenticateToken, isPublisher, controllerA.getAllAuthors);           // Obtener todos los autores
authorRouter.get('/:id', authenticateToken, isPublisher, controllerA.searchAuthor);         // Buscar autor por ID
authorRouter.post('/', authenticateToken, isPublisher, controllerA.addAuthor);              // Agregar un nuevo autor
authorRouter.put('/:id', authenticateToken, isPublisher, controllerA.updateAuthor);         // Actualizar un autor
authorRouter.delete('/:id', authenticateToken, isPublisher, controllerA.deleteAuthor);      // Eliminar un autor
authorRouter.get('/filter/:biography', authenticateToken, isPublisher, controllerA.filterAuthors); // Filtrar autores por biografía
