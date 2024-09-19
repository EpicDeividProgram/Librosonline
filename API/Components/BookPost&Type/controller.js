// ----------------------------- BookPost&Type CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceBPT } from './service.js';

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
    res.status(200).json(await serviceBPT.addBookPostType(req.body));
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
