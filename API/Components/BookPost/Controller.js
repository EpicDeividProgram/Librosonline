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

// ADD BOOK (POST)
const publishAbook = async (req, res) => {
    const { codeP, name, idA, idU, postDescription } = req.body;

    // Validación de campos vacíos
    if (!codeP || !name || !idA || !idU || !postDescription) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const newPost = await servicePost.addBookPost(req.body);
        res.status(201).json(newPost);
    } catch (error) {
        if (error.message.includes('foreign key')) {
            return res.status(400).json({ error: 'Invalid author or user ID' });
        }
        return res.status(500).json({ error: error.message || 'Error adding book post' });
    }
};

// UPDATE BOOK (PUT)
const updateBookPost = async (req, res) => {
    const { name, idA, idU, postDescription } = req.body;

    // Validación de campos vacíos
    if (!name || !idA || !idU || !postDescription) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const updatedPost = await servicePost.updatePost(req.params.codeP, req.body);
        res.status(200).json(updatedPost);
    } catch (error) {
        if (error.message.includes('foreign key')) {
            return res.status(400).json({ error: 'Invalid author or user ID' });
        }
        return res.status(500).json({ error: error.message || 'Error updating book post' });
    }
};

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
// ----------------------=================
