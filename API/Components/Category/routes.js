import express from 'express';
import { Category } from './model.js'; 
import { controllerC } from './controller.js';
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
    const category = await Category.findAll();
    res.json(category);
});

// Rutas para manejar category
/*categoryRouter.get('/', controllerC.getAllCategories); // Obtener todas las categorías
categoryRouter.get('/search/:id', controllerC.searchCategory); // Buscar categoría por ID
categoryRouter.post('/add', controllerC.addCategory); // Agregar nueva categoría
categoryRouter.put('/update/:id', controllerC.updateCategory); // Actualizar categoría por ID
categoryRouter.delete('/delete/:id', controllerC.deleteCategory); // Eliminar categoría por ID
categoryRouter.get('/filter/:name', controllerC.filterCategories); // Filtrar categorías por nombre*/


// Proteger las rutas con autenticación y verificar si es 'publisher'
categoryRouter.get('/', authenticateToken, isPublisher, controllerC.getAllCategories);
categoryRouter.get('/search/:id', authenticateToken, isPublisher, controllerC.searchCategory);
categoryRouter.post('/add', authenticateToken, isPublisher, controllerC.addCategory);
categoryRouter.put('/update/:id', authenticateToken, isPublisher, controllerC.updateCategory);
categoryRouter.delete('/delete/:id', authenticateToken, isPublisher, controllerC.deleteCategory);
categoryRouter.get('/filter/:name', authenticateToken, isPublisher, controllerC.filterCategories);