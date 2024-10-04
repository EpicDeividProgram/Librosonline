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
//ADD TYPE (POST)
const addUserType = async (req, res)=>{
    res.status(200).json(await serviceT.addTypeUser(req.body));
}
//UPDATE TYPE (PUT)
const updateUserType = async (req, res)=> {
    res.status(200).json(await serviceT.updateTypeUser(req.params.username, req.body))
}

//DELETE TYPE (DELETE)
const deleteUserType = async (req, res) =>{
    res.status(200).json(await serviceT.deleteTypeUser(req.params.username));
}

/*
.showAllTypes()
.searchByUsername(req.params.username)
.addTypeUser(req.body)
.updateTypeUser(req.params.username, req.body)
.deleteTypeUser(req.params.username)
*/

//export this controller
export const controllerT= {
    getAllUserTypes,
    addUserType,
    searchUserType,
    updateUserType,
    deleteUserType
}
// ----------------------=================