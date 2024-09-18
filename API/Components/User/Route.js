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

// (CRUD DE TYPE-OF-USER)
//(GET)
userRouter.get('/users', controllerU.getAllUsers) //=== GET/SHOW TYPES === 
userRouter.get('/:idU', controllerU.searchUser) //=== SEARCH TYPE BY USERNAME === 
userRouter.get('/userByType/:type', controllerU.filterByType) //=== FILTER USERS BY TYPES === 
//(POST)
userRouter.post('/', controllerU.addUser) //=== ADD === 
//(PUT)
userRouter.put('/:idU',controllerU.updateUser) //=== UPDATE === 
//(DELETE)
userRouter.delete('/:idU', controllerU.deleteUser) //=== DELETE ===
//*
//*************************