// --------------------------------------------------------
// --------------- BOOKTYPE ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerBookT} from './Controller.js'
import bodyParser from 'body-parser'

export const typeBookRouter = express.Router()

typeBookRouter.use(bodyParser.json());
typeBookRouter.use(bodyParser.urlencoded({ extended: true}))
typeBookRouter.use(express.json())

// (CRUD DE BOOK-TYPE)
//(GET)
typeBookRouter.get('/booktypes', controllerBookT.getAllBookTypes) //=== GET/SHOW BOOK-TYPES === 
typeBookRouter.get('/:codeT', controllerBookT.searchBookType) //=== SEARCH BOOK-TYPE BY CODET === 
//(POST)
typeBookRouter.post('/', controllerBookT.addBookType) //=== ADD === 
//(PUT)
typeBookRouter.put('/:codeT',controllerBookT.updateBookType) //=== UPDATE === 
//(DELETE)
typeBookRouter.delete('/:codeT', controllerBookT.deleteBookType) //=== DELETE ===
//*
//FILTER BOOKTYPE BY DESCRIPTION-TYPE
typeBookRouter.get('/byDescription/:descriptionT', controllerBookT.filterBookTypes)
//*************************