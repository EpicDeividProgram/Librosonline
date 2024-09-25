// --------------------------------------------------------
// --------------- BOOKPOST ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerPost} from './Controller.js'
import bodyParser from 'body-parser'

export const postBookRouter = express.Router()

postBookRouter.use(bodyParser.json());
postBookRouter.use(bodyParser.urlencoded({ extended: true}))
postBookRouter.use(express.json())

// (CRUD DE BOOK-POST ----------- PUBLICAR UN LIBRO + EXTRAS)
//(GET)
postBookRouter.get('/booksposted', controllerPost.getAllBookPost); //=== GET/SHOW BOOK-POST === 
postBookRouter.get('/:codeP', controllerPost.searchBookPost); //=== SEARCH BOOK-POST BY CODEP === 
//(POST)
postBookRouter.post('/', controllerPost.publishAbook); //=== ADD - PUBLISH A BOOK === 
//(PUT)
postBookRouter.put('/:codeP', controllerPost.updateBookPost); //=== UPDATE === 
//(DELETE)
postBookRouter.delete('/:codeP', controllerPost.deleteBookPost); //=== DELETE ===



