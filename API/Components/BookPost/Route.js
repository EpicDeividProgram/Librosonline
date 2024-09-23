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
postBookRouter.get('/booksposted', controllerPost.getAllBookTypes) //=== GET/SHOW BOOK-TYPES === 
postBookRouter.get('/:codeP', controllerPost.searchBookType) //=== SEARCH BOOK-TYPE BY CODET === 
//(POST)
postBookRouter.post('/', controllerPost.publishAbook) //=== ADD === 
//(PUT)
postBookRouter.put('/:codeP',controllerPost.updateBookType) //=== UPDATE === 
//(DELETE)
postBookRouter.delete('/:codeP', controllerPost.deleteBookType) //=== DELETE ===
//*