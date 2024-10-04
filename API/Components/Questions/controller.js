// ----------------------------- QUESTIONS CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceQ } from './Service.js';

// GET ALL QUESTIONS (GET)
const getAllQuestions = async (req, res) => {
    res.status(200).json(await serviceQ.showAllQuestions());
};

// SEARCH QUESTION BY ID (GET)
const searchQuestion = async (req, res) => {
    res.status(200).json(await serviceQ.searchById(req.params.id));
};

// ADD QUESTION (POST)
const addQuestions = async (req, res) => {
    res.status(200).json(await serviceQ.addQuestion(req.body));  // req.body debe incluir el userId
};


// UPDATE QUESTION (PUT)
const updateQuestions = async (req, res) => {
    res.status(200).json(await serviceQ.updateQuestion(req.params.id, req.body));
};

// DELETE QUESTION (DELETE)
const deleteQuestions = async (req, res) => {
    res.status(200).json(await serviceQ.deleteQuestion(req.params.id));
};

// FILTER QUESTIONS BY DESCRIPTION (GET)
const filterQuestions = async (req, res) => {
    res.status(200).json(await serviceQ.filterByDescription(req.params.description));
};

// Exportación
export const controllerQ = {
    getAllQuestions,
    addQuestions,
    searchQuestion,
    updateQuestions,
    deleteQuestions,
    filterQuestions
};