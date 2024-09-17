// --------------------------------------------------------
// --------------- USER CONTROLLER -------------------
// --------------------------------------------------------
import { serviceU } from './Service.js';

// Obtener todos los usuarios (GET)
const getAllUsers = async (req, res) => {
    res.status(200).json(await serviceU.showAllUsers());
};

// Buscar usuario por ID (GET)
const searchUserById = async (req, res) => {
    res.status(200).json(await serviceU.searchUserById(req.params.idU));
};

// Añadir un nuevo usuario (POST)
const addUser = async (req, res) => {
    res.status(200).json(await serviceU.addUser(req.body));
};

// Actualizar un usuario (PUT)
const updateUser = async (req, res) => {
    res.status(200).json(await serviceU.updateUser(req.params.idU, req.body));
};

// Eliminar un usuario (DELETE)
const deleteUser = async (req, res) => {
    res.status(200).json(await serviceU.deleteUser(req.params.idU));
};

// Exportar el controlador
export const controllerU = {
    getAllUsers,
    searchUserById,
    addUser,
    updateUser,
    deleteUser
};
