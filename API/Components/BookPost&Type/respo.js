// ----------------------------- BookPost&Type REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { BookPostType } from './model.js';

// SHOW ALL
const showAll = async () => {
    return await BookPostType.findAll();
};

// SEARCH BY ID
const findById = async (id) => {
    return await BookPostType.findOne({ where: { codeT: id } });
};

// ADD/CREATE
const addBPT = async (bookPostType) => {
    const newBPT = await BookPostType.create(bookPostType);
    return newBPT;
};

// DELETE
const deleteBPT = async (id) => {
    const delBPT = await BookPostType.findOne({ where: { codeT: id } });
    await delBPT.destroy();
    return delBPT;
};

// Exportar repos
export const reposBPT = {
    showAll,
    findById,
    addBPT,
    deleteBPT
};
