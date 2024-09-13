// ----------------------------- AUTHOR CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceA } from './service.js';

//GET AUTHORS (GET)
const getAllAuthors = async (req, res) => {
    res.status(200).json(await serviceA.showAllAuthors());
};

//SEARCH AUTHOR (GET)
const searchAuthor = async (req, res) => {
    res.status(200).json(await serviceA.searchById(req.params.id));
};

//ADD AUTHOR (POST)
const addAuthor = async (req, res) => {
    res.status(200).json(await serviceA.addAuthor(req.body));
};

//UPDATE AUTHOR (PUT)
const updateAuthor = async (req, res) => {
    res.status(200).json(await serviceA.updateAuthor(req.params.id, req.body));
};

//DELETE AUTHOR (DELETE)
const deleteAuthor = async (req, res) => {
    res.status(200).json(await serviceA.deleteAuthor(req.params.id));
};

//FILTER AUTHORS BY BIOGRAPHY (GET)
const filterAuthors = async (req, res) => {
    res.status(200).json(await serviceA.filterByBiography(req.params.biography));
};

// Exportación
export const controllerA = {
    getAllAuthors,
    addAuthor,
    searchAuthor,
    updateAuthor,
    deleteAuthor,
    filterAuthors
};
