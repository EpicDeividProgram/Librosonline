import express from 'express';
import { controllerCPB } from './controller.js';

export const categoryPerBookRouter = express.Router();

categoryPerBookRouter.get('/', controllerCPB.getAllCategoryPerBook); 
categoryPerBookRouter.get('/search/:id', controllerCPB.searchCategoryPerBook); 
categoryPerBookRouter.post('/add', controllerCPB.addCategoryPerBook); 
categoryPerBookRouter.delete('/delete/:id', controllerCPB.deleteCategoryPerBook);
