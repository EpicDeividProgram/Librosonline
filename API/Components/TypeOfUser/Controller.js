// --------------------------------------------------------
// --------------- TYPE-OF-USER CONTROLLER -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { serviceT } from './Service.js';
// === HTTP VERBS & ASYNC FUNCS ===
//GET TYPES (GET)
const getAllUserTypes = async(req, res)=>{
    res.status(200).json(await serviceT.showAllTypes())
}
//
//SEARCH TYPE (GET)
const searchUserType = async (req, res)=>{
    res.status(200).json(await serviceT.searchByUsername(req.params.username))
}

// ADD TYPE (POST)
const addUserType = async (req, res) => {
    const { username, typeOfUser } = req.body;
    
    // Validación de que los campos no estén vacíos
    if (!username || !typeOfUser) {
        return res.status(400).json({ error: 'Username and TypeOfUser are required' });
    }
    
    try {
        // Verificar si el username ya existe
        const existingUser = await serviceT.searchByUsername(username);
        if (existingUser.typeOfUser) {
            return res.status(400).json({ error: `Username '${username}' already exists` });
        }

        // Verificar si el tipo de usuario ya existe
        const existingType = await serviceT.searchByTypeOfUser(typeOfUser);
        if (existingType.typeOfUser) {
            return res.status(400).json({ error: `Type of User '${typeOfUser}' already exists` });
        }

        const newType = await serviceT.addTypeUser(req.body);
        res.status(201).json(newType);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Failed to add user type' });
    }
};

// UPDATE TYPE (PUT)
const updateUserType = async (req, res) => {
    const { typeOfUser } = req.body;

    // Validación de que el campo typeOfUser no esté vacío
    if (!typeOfUser) {
        return res.status(400).json({ error: 'TypeOfUser is required for updating' });
    }

    try {
        // Verificar si el usuario existe antes de intentar actualizar
        const existingUserType = await serviceT.searchByUsername(req.params.username);
        if (!existingUserType.typeOfUser) {
            return res.status(404).json({ error: `User type for '${req.params.username}' not found` });
        }

        // Verificar si el tipo de usuario ya existe
        const existingType = await serviceT.searchByTypeOfUser(typeOfUser);
        if (existingType.typeOfUser && existingType.typeOfUser !== req.params.typeOfUser) {
            return res.status(400).json({ error: `Type of User '${typeOfUser}' already exists` });
        }

        const updatedType = await serviceT.updateTypeUser(req.params.username, req.body);
        res.status(200).json(updatedType);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Failed to update user type' });
    }
};

//DELETE TYPE (DELETE)
const deleteUserType = async (req, res) =>{
    res.status(200).json(await serviceT.deleteTypeUser(req.params.username));
}


//export this controller
export const controllerT= {
    getAllUserTypes,
    addUserType,
    searchUserType,
    updateUserType,
    deleteUserType
}
// ----------------------=================