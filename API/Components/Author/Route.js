import express from 'express';
import { Author } from './model.js'; // Importación relativa del modelo
import { controllerA } from './Controller.js'; // Importa el controlador de Author


export const authorRouter = express.Router();

authorRouter.get('/', async (req, res) => {
    const authors = await Author.findAll();
    res.json(authors);
});


// Rutas CRUD para Author
authorRouter.get('/', controllerA.getAllAuthors);           // Obtener todos los autores
authorRouter.get('/:id', controllerA.searchAuthor);         // Buscar autor por ID
authorRouter.post('/', controllerA.addAuthor);              // Agregar un nuevo autor
authorRouter.put('/:id', controllerA.updateAuthor);         // Actualizar un autor
authorRouter.delete('/:id', controllerA.deleteAuthor);      // Eliminar un autor
authorRouter.get('/filter/:biography', controllerA.filterAuthors); // Filtrar autores por biografía
