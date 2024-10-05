// --------------------------------------------------------
// --------------- BOOKPOST CONTROLLER -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { servicePost } from './Service.js';

// === HTTP VERBS & ASYNC FUNCS ===
//GET TYPES (GET)
const getAllBookPost = async(req, res)=>{
    res.status(200).json(await servicePost.showAllTypes())
}

//SEARCH BOOK (GET)
const searchBookPost = async (req, res)=>{
    res.status(200).json(await servicePost.searchByCode(req.params.codeP))
}

//ADD BOOK (POST)
const publishAbook = async (req, res)=>{
    res.status(200).json(await servicePost.addBookPost(req.body));
}
//UPDATE BOOK (PUT)
const updateBookPost = async (req, res)=> {
    res.status(200).json(await servicePost.updatePost(req.params.codeP, req.body))
}

//DELETE BOOK (DELETE)
const deleteBookPost = async (req, res) =>{
    res.status(200).json(await servicePost.deletePost(req.params.codeP));
}


//export this controller
export const controllerPost= {
    getAllBookPost,
    publishAbook,
    searchBookPost,
    updateBookPost,
    deleteBookPost
}

