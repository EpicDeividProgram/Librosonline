// --------------------------------------------------------
// --------------- BOOKTYPE CONTROLLER -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { serviceBookT } from './Service.js';
// === HTTP VERBS & ASYNC FUNCS ===
//GET TYPES (GET)
const getAllBookTypes = async(req, res)=>{
    res.status(200).json(await serviceBookT.showAllTypes())
}
//
//SEARCH TYPE (GET)
const searchBookType = async (req, res)=>{
    res.status(200).json(await serviceBookT.searchByCode(req.params.codeT))
}

//ADD TYPE (POST)
const addBookType = async (req, res)=>{
    res.status(200).json(await serviceBookT.addTypeBook(req.body));
}
//UPDATE TYPE (PUT)
const updateBookType = async (req, res)=> {
    res.status(200).json(await serviceBookT.updateTypeBook(req.params.codeT, req.body))
}

//DELETE TYPE (DELETE)
const deleteBookType = async (req, res) =>{
    res.status(200).json(await serviceBookT.deleteTypeBook(req.params.codeT));
}

//FILTER BOOK-TYPE BY DESCRIPTION-TYPE (GET)
const filterBookTypes = async (req, res)=>{
    res.status(200).json(await serviceBookT.filterByDescription(req.params.descriptionType))
}

//export this controller
export const controllerBookT= {
    getAllBookTypes,
    addBookType,
    searchBookType,
    updateBookType,
    deleteBookType,
    filterBookTypes
}
// ----------------------=================

//FILTER PRODUCT BY QUANTITY (GET)
/*
const filterProducts = async (req, res)=>{
    res.status(200).json(await serviceP.filterByQuantity(req.params.quantity))
}*/