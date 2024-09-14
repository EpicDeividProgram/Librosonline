// --------------------------------------------------------
// --------------- TYPE-OF-USER ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerT} from './Controller.js'
import bodyParser from 'body-parser'

export const typeUserRouter = express.Router()

typeUserRouter.use(bodyParser.json());
typeUserRouter.use(bodyParser.urlencoded({ extended: true}))
typeUserRouter.use(express.json())

// (CRUD DE TYPE-OF-USER)
//(GET)
typeUserRouter.get('/typeusers', controllerT.getAllUserTypes) //=== GET/SHOW TYPES === 
typeUserRouter.get('/:username', controllerT.searchUserType) //=== SEARCH TYPE BY USERNAME === 
//(POST)
typeUserRouter.post('/', controllerT.addUserType) //=== ADD === 
//(PUT)
typeUserRouter.put('/:username',controllerT.updateUserType) //=== UPDATE === 
//(DELETE)
typeUserRouter.delete('/:username', controllerT.deleteUserType) //=== DELETE ===
//*
//*************************
/*FILTER X BY X
typeUserRouter.get('/byQuantity/:quantity', controllerP.filterProducts)*/
//export const typeRouter = typeUserRouter;