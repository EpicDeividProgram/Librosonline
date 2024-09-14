// --------------------------------------------------------
// --------------- TYPE-OF-USER ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerT} from '../TypeOfUser/Controller.js'
import bodyParser from 'body-parser'

export const typeUserRouter = express.Router()

typeUserRouter.use(bodyParser.json());
typeUserRouter.use(bodyParser.urlencoded({ extended: true}))
typeUserRouter.use(express.json())

// (CRUD DE TYPE-OF-USER)
//(GET)
typeUserRouter.get('/typeusers', controllerP.getAllUserTypes) //=== GET/SHOW TYPES === 
typeUserRouter.get('/:username', controllerP.searchUserType) //=== SEARCH TYPE BY USERNAME === 
//(POST)
typeUserRouter.post('/', controllerP.addUserType) //=== ADD === 
//(PUT)
typeUserRouter.put('/:username',controllerP.updateUserType) //=== UPDATE === 
//(DELETE)
typeUserRouter.delete('/:username', controllerP.deleteUserType) //=== DELETE ===



//*
//*************************
/*FILTER X BY X
typeUserRouter.get('/byQuantity/:quantity', controllerP.filterProducts)*/
//export const typeRouter = typeUserRouter;