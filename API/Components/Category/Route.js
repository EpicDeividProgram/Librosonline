import express from 'express';
import { Category } from './Model.js'; 
import { controllerC } from './Controller.js';
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
    const category = await Category.findAll();
    res.json(category);
});


// Proteger las rutas con autenticación y verificar si es 'publisher'
categoryRouter.get('/', authenticateToken, isPublisher, controllerC.getAllCategories);
categoryRouter.get('/search/:id', authenticateToken, isPublisher, controllerC.searchCategory);
categoryRouter.post('/add', authenticateToken, isPublisher, controllerC.addCategory);
categoryRouter.put('/update/:id', authenticateToken, isPublisher, controllerC.updateCategory);
categoryRouter.delete('/delete/:id', authenticateToken, isPublisher, controllerC.deleteCategory);
categoryRouter.get('/filter/:name', authenticateToken, isPublisher, controllerC.filterCategories);