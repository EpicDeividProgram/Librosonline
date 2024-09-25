// ----------------------------- QUESTIONS REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { Questions } from './Model.js';

// SHOW ALL QUESTIONS
const showAll = async () => {
    return await Questions.findAll();
};

// SEARCH QUESTION BY ID
const findQuestionByID = async (id) => {
    return await Questions.findOne({ where: { codeQ: id } });
};

// ADD/CREATE QUESTION
const addQ = async (question) => {
    const newQuestion = await Questions.create(question);
    return newQuestion;
};

// UPDATE QUESTION
const updateQ = async (id, question) => {
    const updQuestion = await Questions.findOne({ where: { codeQ: id } });
    updQuestion.description = question.description;
    await updQuestion.save();
    return updQuestion;
};

// DELETE QUESTION
const deleteQ = async (id) => {
    const delQuestion = await Questions.findOne({ where: { codeQ: id } });
    await delQuestion.destroy();
    return delQuestion;
};

// Exportar repos
export const reposQ = {
    showAll,
    findQuestionByID,
    addQ,
    updateQ,
    deleteQ
};
