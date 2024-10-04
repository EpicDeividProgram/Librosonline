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

// ADD TYPE (POST)
const addBookType = async (req, res) => {
    const { codeT, descriptionType } = req.body;

    // Validación de campos vacíos
    if (!codeT || !descriptionType) {
        return res.status(400).json({ error: 'Both codeT and descriptionType are required' });
    }

    try {
        // Verificar si ya existe un tipo de libro con el mismo codeT
        const existingType = await serviceBookT.searchByCode(codeT);
        if (existingType.typeOfBook) {
            return res.status(400).json({ error: `Book type with code '${codeT}' already exists` });
        }

        const newType = await serviceBookT.addTypeBook(req.body);
        res.status(201).json(newType);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Error adding book type' });
    }
};

// UPDATE TYPE (PUT)
const updateBookType = async (req, res) => {
    const { descriptionType } = req.body;

    // Validación de campos vacíos
    if (!descriptionType) {
        return res.status(400).json({ error: 'DescriptionType is required' });
    }

    try {
        // Verificar si el tipo de libro existe antes de actualizar
        const existingType = await serviceBookT.searchByCode(req.params.codeT);
        if (!existingType.typeOfBook) {
            return res.status(404).json({ error: `Book type with code '${req.params.codeT}' not found` });
        }

        // Verificar si hay otro tipo de libro con el mismo codeT (solo si es diferente)
        const existingTypeWithSameCode = await serviceBookT.searchByCode(req.body.codeT);
        if (existingTypeWithSameCode.typeOfBook && existingTypeWithSameCode.typeOfBook.codeT !== req.params.codeT) {
            return res.status(400).json({ error: `Book type with code '${req.body.codeT}' already exists` });
        }

        const updatedType = await serviceBookT.updateTypeBook(req.params.codeT, req.body);
        res.status(200).json(updatedType);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Error updating book type' });
    }
};

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