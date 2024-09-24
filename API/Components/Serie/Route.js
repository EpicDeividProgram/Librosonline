// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerSerie} from './Controller.js'
import bodyParser from 'body-parser'

export const sagaRouter = express.Router()

sagaRouter.use(bodyParser.json());
sagaRouter.use(bodyParser.urlencoded({ extended: true}))
sagaRouter.use(express.json())

// (CRUD DE serie - saga)
//(GET)
sagaRouter.get('/series', controllerSerie.getAllSeries) //=== GET/SHOW SERIE=== 
sagaRouter.get('/:codeR', controllerSerie.searchSerie) //=== SEARCH SERIE BY CODER === 
//(POST)
sagaRouter.post('/', controllerSerie.addSerie) //=== ADD === 
//(PUT)
sagaRouter.put('/:codeR',controllerSerie.updateSerie) //=== UPDATE === 
//(DELETE)
sagaRouter.delete('/:codeR', controllerSerie.deleteSerie) //=== DELETE ===

//*************************