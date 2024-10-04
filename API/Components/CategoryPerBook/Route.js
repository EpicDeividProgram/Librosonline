import express from 'express';
import { controllerCPB } from './Controller.js';
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const categoryPerBookRouter = express.Router();

categoryPerBookRouter.get('/', authenticateToken, isPublisher, controllerCPB.getAllCategoryPerBook); 
categoryPerBookRouter.get('/search/:id', authenticateToken, isPublisher, controllerCPB.searchCategoryPerBook); 
categoryPerBookRouter.post('/add', authenticateToken, isPublisher, controllerCPB.addCategoryPerBook); 
categoryPerBookRouter.delete('/delete/:id', authenticateToken, isPublisher, controllerCPB.deleteCategoryPerBook);
