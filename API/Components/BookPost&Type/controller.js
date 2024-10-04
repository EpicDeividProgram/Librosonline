// ----------------------------- BookPost&Type CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceBPT } from './Service.js';

// GET ALL BOOKPOST&TYPE
const getAllBookPostType = async (req, res) => {
    res.status(200).json(await serviceBPT.showAllBookPostType());
};

// SEARCH BY ID
const searchBookPostType = async (req, res) => {
    res.status(200).json(await serviceBPT.searchById(req.params.id));
};

// ADD NEW BOOKPOST&TYPE
const addBookPostType = async (req, res) => {
    const { codeT, codeBook, codeType } = req.body;

    // Validación de campos vacíos
    if (!codeT || !codeBook || !codeType) {
        return res.status(400).json({ error: 'Fields codeT, codeBook, and codeType are required' });
    }

    try {
        const newBookPostType = await serviceBPT.addBookPostType(req.body);
        res.status(201).json(newBookPostType);
    } catch (error) {
        return res.status(500).json({ error: error.message || 'Error adding BookPostType' });
    }
};

// DELETE BOOKPOST&TYPE
const deleteBookPostType = async (req, res) => {
    res.status(200).json(await serviceBPT.deleteBookPostType(req.params.id));
};

// Exportación
export const controllerBPT = {
    getAllBookPostType,
    addBookPostType,
    searchBookPostType,
    deleteBookPostType
};
