// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerSerie} from './Controller.js'
import bodyParser from 'body-parser'
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const sagaRouter = express.Router()

sagaRouter.use(bodyParser.json());
sagaRouter.use(bodyParser.urlencoded({ extended: true}))
sagaRouter.use(express.json())

// (CRUD DE serie - saga)
//(GET)
sagaRouter.get('/series', authenticateToken, isPublisher, controllerSerie.getAllSeries) //=== GET/SHOW SERIE=== 
sagaRouter.get('/:codeR', authenticateToken, isPublisher, controllerSerie.searchSerie) //=== SEARCH SERIE BY CODER === 
//(POST)
sagaRouter.post('/', authenticateToken, isPublisher, controllerSerie.addSerie) //=== ADD === 
//(PUT)
sagaRouter.put('/:codeR', authenticateToken, isPublisher, controllerSerie.updateSerie) //=== UPDATE === 
//(DELETE)
sagaRouter.delete('/:codeR', authenticateToken, isPublisher, controllerSerie.deleteSerie) //=== DELETE ===

//*************************