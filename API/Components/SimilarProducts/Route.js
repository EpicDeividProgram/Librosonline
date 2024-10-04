// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerS} from './Controller.js'
import bodyParser from 'body-parser'
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const similarProdrouter = express.Router()

similarProdrouter.use(bodyParser.json());
similarProdrouter.use(bodyParser.urlencoded({ extended: true}))
similarProdrouter.use(express.json())

// (CRUD DE BOOK-TYPE)
//(GET)
similarProdrouter.get('/simproducts', authenticateToken, isPublisher, controllerS.getAllSimProd) //=== GET/SHOW SIM. PRODUCTS === 
similarProdrouter.get('/:codeS', authenticateToken, isPublisher, controllerS.searchSimProd) //=== SEARCH SIM. PRODUCT BY CODES === 
//(POST)
similarProdrouter.post('/', authenticateToken, isPublisher, controllerS.addSimProd) //=== ADD === 
//(PUT)
similarProdrouter.put('/:codeS', authenticateToken, isPublisher,controllerS.updateSimProd) //=== UPDATE === 
//(DELETE)
similarProdrouter.delete('/:codeS', authenticateToken, isPublisher, controllerS.deleteSimProd) //=== DELETE ===
//
similarProdrouter.get('/byName/:name', authenticateToken, isPublisher, controllerS.filterProdByName) //FILTER SIM. PRODUCTS BY NAME

//*************************