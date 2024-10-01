// --------------------------------------------------------
// --------------- BOOKTYPE ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerBookT} from './Controller.js'
import bodyParser from 'body-parser'
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const typeBookRouter = express.Router()

typeBookRouter.use(bodyParser.json());
typeBookRouter.use(bodyParser.urlencoded({ extended: true}))
typeBookRouter.use(express.json())

// (CRUD DE BOOK-TYPE)
//(GET)
typeBookRouter.get('/booktypes',  authenticateToken, isPublisher, controllerBookT.getAllBookTypes) //=== GET/SHOW BOOK-TYPES === 
typeBookRouter.get('/:codeT',  authenticateToken, isPublisher, controllerBookT.searchBookType) //=== SEARCH BOOK-TYPE BY CODET === 
//(POST)
//typeBookRouter.post('/', controllerBookT.addBookType) //=== ADD === 
typeBookRouter.post('/booktypes',  authenticateToken, isPublisher, controllerBookT.addBookType); //=== ADD === 

//(PUT)
typeBookRouter.put('/:codeT',  authenticateToken, isPublisher, controllerBookT.updateBookType) //=== UPDATE === 
//(DELETE)
typeBookRouter.delete('/:codeT',  authenticateToken, isPublisher, controllerBookT.deleteBookType) //=== DELETE ===
//*
//FILTER BOOKTYPE BY DESCRIPTION-TYPE
typeBookRouter.get('/byDescription/:descriptionT',  authenticateToken, isPublisher, controllerBookT.filterBookTypes)
//*************************