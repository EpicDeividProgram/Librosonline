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
userRouter.get('/', controllerU.getAllUsers); // Show all users
userRouter.get('/:idU', controllerU.searchUserById); // Search user by ID
userRouter.post('/', controllerU.addUser); // Add new user
userRouter.put('/:idU', controllerU.updateUser); // Update user
userRouter.delete('/:idU', controllerU.deleteUser); // Delete user

// Export the routes
export default userRouter;
