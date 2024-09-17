// --------------------------------------------------------
// --------------- USER ROUTES -------------------
// --------------------------------------------------------
import express from 'express';
import { controllerU } from './Controller.js';
import bodyParser from 'body-parser';

export const userRouter = express.Router();

userRouter.use(bodyParser.json());
userRouter.use(bodyParser.urlencoded({ extended: true }));
userRouter.use(express.json());

// (CRUD para USERS)
userRouter.get('/', controllerU.getAllUsers); // Mostrar todos los usuarios
userRouter.get('/:idU', controllerU.searchUserById); // Buscar usuario por ID
userRouter.post('/', controllerU.addUser); // Añadir nuevo usuario
userRouter.put('/:idU', controllerU.updateUser); // Actualizar usuario
userRouter.delete('/:idU', controllerU.deleteUser); // Eliminar usuario

// Exportar las rutas
export default userRouter;
