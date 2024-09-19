import express from 'express';
import { controllerBPT } from './controller.js';

export const bookPostTypeRouter = express.Router();

bookPostTypeRouter.get('/', controllerBPT.getAllBookPostType);            
bookPostTypeRouter.get('/search/:id', controllerBPT.searchBookPostType);    
bookPostTypeRouter.post('/add', controllerBPT.addBookPostType);           
bookPostTypeRouter.delete('/delete/:id', controllerBPT.deleteBookPostType);
