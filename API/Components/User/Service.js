// --------------------------------------------------------
// --------------- USER SERVICE -------------------
// --------------------------------------------------------
import { reposU } from './Repository.js';

// Mostrar todos los usuarios
const showAllUsers = async () => {
    return { users: await reposU.showAllUsers() };
};

// Buscar usuario por ID
const searchUserById = async (idU) => {
    return { user: await reposU.findUserById(idU) };
};

// Añadir un nuevo usuario
const addUser = async (user) => {
    return { newUser: await reposU.addUser(user) };
};

// Actualizar un usuario por ID
const updateUser = async (idU, userDetails) => {
    return { updatedUser: await reposU.updateUser(idU, userDetails) };
};

// Eliminar un usuario por ID
const deleteUser = async (idU) => {
    return { deletedUser: await reposU.deleteUser(idU) };
};

export const serviceU = {
    showAllUsers,
    searchUserById,
    addUser,
    updateUser,
    deleteUser
};
