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
        // Verificar si ya existe un BookPost con el mismo codeP
        const existingPost = await servicePost.searchByCode(codeP);
        if (existingPost.BookPost) {
            return res.status(400).json({ error: `BookPost with codeP '${codeP}' already exists` });
        }

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
        // Verificar si el código del post a actualizar ya existe
        const existingPost = await servicePost.searchByCode(req.params.codeP);
        
        // Si no existe, lanzar un error
        if (!existingPost.BookPost) {
            return res.status(404).json({ error: `BookPost with codeP '${req.params.codeP}' not found` });
        }

        // Verificar si el nuevo código (codeP) ya existe (si el código se está cambiando)
        if (req.body.codeP && req.body.codeP !== req.params.codeP) {
            const duplicatePost = await servicePost.searchByCode(req.body.codeP);
            if (duplicatePost.BookPost) {
                return res.status(400).json({ error: `BookPost with codeP '${req.body.codeP}' already exists` });
            }
        }

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
