// --------------------------------------------------------
// --------------- BOOKPOST ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerPost} from './Controller.js'
import bodyParser from 'body-parser'
import { authenticateToken, isPublisher } from '../Auth/auth.middleware.js';

export const postBookRouter = express.Router()

postBookRouter.use(bodyParser.json());
postBookRouter.use(bodyParser.urlencoded({ extended: true}))
postBookRouter.use(express.json())

// (CRUD DE BOOK-POST ----------- PUBLICAR UN LIBRO + EXTRAS)
//(GET)
postBookRouter.get('/booksposted', authenticateToken, controllerPost.getAllBookPost); //=== GET/SHOW BOOK-POST === 
postBookRouter.get('/:codeP', authenticateToken, controllerPost.searchBookPost); //=== SEARCH BOOK-POST BY CODEP === 
//(POST)
postBookRouter.post('/', authenticateToken, isPublisher, controllerPost.publishAbook); //=== ADD - PUBLISH A BOOK === 
//(PUT)
postBookRouter.put('/:codeP', authenticateToken, isPublisher, controllerPost.updateBookPost); //=== UPDATE === 
//(DELETE)
postBookRouter.delete('/:codeP', authenticateToken, isPublisher, controllerPost.deleteBookPost); //=== DELETE ===



