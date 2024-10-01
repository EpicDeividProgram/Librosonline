import express from 'express';
import { controllerBPT } from './controller.js';
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const bookPostTypeRouter = express.Router();

bookPostTypeRouter.get('/',  authenticateToken, isPublisher, controllerBPT.getAllBookPostType);            
bookPostTypeRouter.get('/search/:id',  authenticateToken, isPublisher, controllerBPT.searchBookPostType);    
bookPostTypeRouter.post('/add',  authenticateToken, isPublisher, controllerBPT.addBookPostType);           
bookPostTypeRouter.delete('/delete/:id',  authenticateToken, isPublisher, controllerBPT.deleteBookPostType);
