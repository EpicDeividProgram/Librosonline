// --------------------------------------------------------
// --------------- USER CONTROLLER -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { serviceU } from './Service.js';
// === HTTP VERBS & ASYNC FUNCS ===
//GET TYPES (GET)
const getAllUsers = async(req, res)=>{
    res.status(200).json(await serviceU.showAllUsers())
}
//
//SEARCH TYPE (GET)
const searchUserById = async (req, res)=>{
    res.status(200).json(await serviceU.searchByUsername(req.params.idU))
}

//FILTER USER BY TYPE (GET)
const filterUByType = async (req, res)=>{
    res.status(200).json(await serviceU.filterByType(req.params.idU))
}
//ADD TYPE (POST)
const addUser = async (req, res)=>{
    res.status(200).json(await serviceU.addUser(req.body));
}
//UPDATE TYPE (PUT)
const updateUser = async (req, res)=> {
    res.status(200).json(await serviceU.updateUser(req.params.idU, req.body))
}

//DELETE TYPE (DELETE)
const deleteUser = async (req, res) =>{
    res.status(200).json(await serviceU.deleteUser(req.params.idU));
}

//export this controller
export const controllerU= {
    getAllUsers,
    addUser,
    searchUserById,
    filterUByType,
    updateUser,
    deleteUser
}
// ----------------------=================