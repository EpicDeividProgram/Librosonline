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
    const { idU, name, lastName, birthDate, address, email, type, password } = req.body;

    // Validación de campos vacíos
    if (!idU || !name || !lastName || !birthDate || !address || !email || !type || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        // Verificar si ya existe un usuario con el mismo idU
        const existingUserById = await serviceU.searchUserById(idU);
        if (existingUserById.user) {
            return res.status(400).json({ error: `User with ID '${idU}' already exists` });
        }

        // Verificar si ya existe un usuario con el mismo email
        const existingUserByEmail = await serviceU.searchByEmail(email);
        if (existingUserByEmail.user) {
            return res.status(400).json({ error: `Email '${email}' is already in use` });
        }

        const newUser = await serviceU.addUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        // Capturar el error de clave foránea y otros errores
        if (error.message === 'Type does not exist') {
            return res.status(400).json({ error: 'Type provided does not exist' });
        }
        return res.status(500).json({ error: error.message || 'Error creating user' });
    }
};


// Actualizar un usuario (PUT)
const updateUser = async (req, res) => {
    const { name, lastName, birthDate, address, email, type } = req.body;

    // Validación de campos vacíos
    if (!name || !lastName || !birthDate || !address || !email || !type) {
        return res.status(400).json({ error: 'All fields except password are required' });
    }

    try {
        // Verificar si el usuario existe antes de actualizar
        const existingUser = await serviceU.searchUserById(req.params.idU);
        if (!existingUser.user) {
            return res.status(404).json({ error: `User with ID '${req.params.idU}' not found` });
        }

        // Verificar si el email ya está en uso por otro usuario
        const existingUserByEmail = await serviceU.searchByEmail(email);
        if (existingUserByEmail.user && existingUserByEmail.user.idU !== req.params.idU) {
            return res.status(400).json({ error: `Email '${email}' is already in use by another user` });
        }

        const updatedUser = await serviceU.updateUser(req.params.idU, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Error updating user' });
    }
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
