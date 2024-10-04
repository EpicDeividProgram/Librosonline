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
    const { codeQ, description, userId } = req.body;

    // Validación de campos vacíos
    if (!codeQ || !description || !userId) {
        return res.status(400).json({ message: 'All fields (codeQ, description, userId) are required' });
    }

    try {
        // Validar si la clave foránea existe (validación de integridad)
        const validUser = await serviceQ.checkUserExists(userId);
        if (!validUser) {
            return res.status(400).json({ message: 'Invalid user: The provided userId does not exist' });
        }

        // Verificar si ya existe una pregunta con el mismo código o descripción
        const existingQuestion = await serviceQ.checkDuplicateQuestion(codeQ, description);
        if (existingQuestion) {
            return res.status(400).json({ message: 'A question with the same codeQ or description already exists' });
        }

        // Crear la nueva pregunta si todo está bien
        const newQuestion = await serviceQ.addQuestion(req.body);
        res.status(201).json(newQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error adding question', error: error.message });
    }
};


// UPDATE QUESTION (PUT)
const updateQuestions = async (req, res) => {
    const { description } = req.body;

    // Validación de campos vacíos
    if (!description) {
        return res.status(400).json({ message: 'Description is required' });
    }

    try {
        // Actualizar la pregunta si todo está bien
        const updatedQuestion = await serviceQ.updateQuestion(req.params.id, req.body);
        res.status(200).json(updatedQuestion);
    } catch (error) {
        res.status(500).json({ message: 'Error updating question', error: error.message });
    }
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
