import express from 'express';
import { Category } from './model.js'; // Importación relativa del modelo
import { controllerC } from './Controller.js';

export const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
    const category = await Category.findAll();
    res.json(category);
});

// Rutas para manejar category
categoryRouter.get('/', controllerC.getAllCategories); // Obtener todas las categorías
categoryRouter.get('/search/:id', controllerC.searchCategory); // Buscar categoría por ID
categoryRouter.post('/add', controllerC.addCategory); // Agregar nueva categoría
categoryRouter.put('/update/:id', controllerC.updateCategory); // Actualizar categoría por ID
categoryRouter.delete('/delete/:id', controllerC.deleteCategory); // Eliminar categoría por ID
categoryRouter.get('/filter/:name', controllerC.filterCategories); // Filtrar categorías por nombre