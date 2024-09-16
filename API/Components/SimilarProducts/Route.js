// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerS} from './Controller.js'
import bodyParser from 'body-parser'

export const similarProdrouter = express.Router()

similarProdrouter.use(bodyParser.json());
similarProdrouter.use(bodyParser.urlencoded({ extended: true}))
similarProdrouter.use(express.json())

// (CRUD DE BOOK-TYPE)
//(GET)
similarProdrouter.get('/simproducts', controllerS.getAllSimProd) //=== GET/SHOW SIM. PRODUCTS === 
similarProdrouter.get('/:codeS', controllerS.searchSimProd) //=== SEARCH SIM. PRODUCT BY CODES === 
//(POST)
similarProdrouter.post('/', controllerS.addSimProd) //=== ADD === 
//(PUT)
similarProdrouter.put('/:codeS',controllerS.updateSimProd) //=== UPDATE === 
//(DELETE)
similarProdrouter.delete('/:codeS', controllerS.deleteSimProd) //=== DELETE ===
//
similarProdrouter.get('/byDescription/:descriptionT', controllerS.filterSimProd) //FILTER SIM. PRODUCTS BY NAME

//*************************