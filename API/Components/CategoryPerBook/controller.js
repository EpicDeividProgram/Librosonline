// ----------------------------- CATEGORY PER BOOK CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceCPB } from './Service.js';

// GET ALL CATEGORY PER BOOK (GET)
const getAllCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.showAllCategoryPerBook());
};

// SEARCH CATEGORY PER BOOK BY ID (GET)
const searchCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.searchById(req.params.id));
};

// ADD CATEGORY PER BOOK (POST)
const addCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.addCategoryPerBook(req.body));
};

// DELETE CATEGORY PER BOOK (DELETE)
const deleteCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.deleteCategoryPerBook(req.params.id));
};

// Exportación
export const controllerCPB = {
    getAllCategoryPerBook,
    searchCategoryPerBook,
    addCategoryPerBook,
    deleteCategoryPerBook
};
