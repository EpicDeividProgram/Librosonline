// ----------------------------- QUESTIONS SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposQ } from './respo.js';

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
const addQuestion = async (question) => {
    return { newQuestion: await reposQ.addQ(question) };
};


// UPDATE QUESTION
const updateQuestion = async (id, question) => {
    return { updQuestion: await reposQ.updateQ(id, question) };
};

// DELETE QUESTION
const deleteQuestion = async (id) => {
    return { delQuestion: await reposQ.deleteQ(id) };
};

// Exportar servicio
export const serviceQ = {
    showAllQuestions,
    filterByDescription,
    searchById,
    addQuestion,
    updateQuestion,
    deleteQuestion
};
