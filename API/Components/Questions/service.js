// ----------------------------- QUESTIONS SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposQ } from './Repository.js';

// SHOW ALL QUESTIONS
const showAllQuestions = async () => {
    const questions = await reposQ.showAll();
    return { Questions: questions };
};

// FILTER QUESTIONS BY DESCRIPTION
const filterByDescription = async (description) => {
    const questions = await reposQ.showAll();
    return { questionsByDescription: questions.filter(q => q.description === description) };
};

// SEARCH BY ID
const searchById = async (id) => {
    return { question: await reposQ.findQuestionByID(id) };
};

// ADD QUESTION
// Agregar la validación de duplicados y claves foráneas
const addQuestion = async (question) => {
    const { codeQ, description, userId } = question;

    // Verificar si la pregunta ya existe
    const existingQuestion = await reposQ.findDuplicateQuestion(codeQ, description);
    if (existingQuestion) {
        throw new Error('A question with the same codeQ or description already exists');
    }

    // Verificar si el usuario existe
    const validUser = await reposQ.checkUserExists(userId);
    if (!validUser) {
        throw new Error('Invalid user: The provided userId does not exist');
    }

    const newQuestion = await reposQ.addQ(question);
    return { newQuestion };
};


// UPDATE QUESTION
const updateQuestion = async (id, question) => {
    return { updQuestion: await reposQ.updateQ(id, question) };
};

// DELETE QUESTION
const deleteQuestion = async (id) => {
    return { delQuestion: await reposQ.deleteQ(id) };
};

// Verificar si existe el usuario
const checkUserExists = async (userId) => {
    const user = await reposQ.checkUserExists(userId);
    return user !== null;
};

// Verificar si ya existe una pregunta con el mismo código o descripción
const checkDuplicateQuestion = async (codeQ, description) => {
    const existingQuestion = await reposQ.findDuplicateQuestion(codeQ, description);
    return existingQuestion !== null;
};



// Exportar servicio
export const serviceQ = {
    showAllQuestions,
    filterByDescription,
    searchById,
    addQuestion,
    updateQuestion,
    deleteQuestion,
    checkUserExists,
    checkDuplicateQuestion
};
