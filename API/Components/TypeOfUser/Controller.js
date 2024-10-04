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
        const newType = await serviceT.addTypeUser(req.body);
        res.status(201).json(newType);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Failed to add user type' });
    }
};

// UPDATE TYPE (PUT)
const updateUserType = async (req, res) => {
    const { username, typeOfUser } = req.body;
    
    // Validación de que los campos no estén vacíos
    if (!typeOfUser) {
        return res.status(400).json({ error: 'TypeOfUser are required for updating' });
    }

    try {
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