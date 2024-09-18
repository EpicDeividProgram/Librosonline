// --------------------------------------------------------
// --------------- USER ROUTE MODULE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express'
import {controllerU} from './Controller.js'
import bodyParser from 'body-parser'

export const userRouter = express.Router()

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: true}))
userRouter.use(express.json())

// (CRUD DE USER)
//(GET)
userRouter.get('/users', controllerU.getAllUsers) //=== GET/SHOW TYPES === 
userRouter.get('/:idU', controllerU.searchUserById) //=== SEARCH USER BY ID === 
userRouter.get('/userByType/:type', controllerU.filterUByType) //=== FILTER USERS BY TYPES === 
//(POST)
userRouter.post('/', controllerU.addUser) //=== ADD === 
//(PUT)
userRouter.put('/:idU',controllerU.updateUser) //=== UPDATE === 
//(DELETE)
userRouter.delete('/:idU', controllerU.deleteUser) //=== DELETE ===
//*
//*************************