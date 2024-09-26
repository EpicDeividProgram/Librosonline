// ----------------------------- BookPost&Type REPOSITORY -----------------------------
// --- IMPORTACIONES ---
// --- respo.js ---
import { BookPostType } from './model.js';
import { BookPost } from '../BookPost/Model.js';
import { BookType } from '../BookType/Model.js';

// SHOW ALL
const showAll = async () => {
    return await BookPostType.findAll({
        include: [
            { model: BookPost }, // Incluye BookPost en los resultados
            { model: BookType }  // Incluye BookType en los resultados
        ]
    });
};

// SEARCH BY ID
const findById = async (id) => {
    return await BookPostType.findOne({
        where: { codeT: id },
        include: [
            { model: BookPost },
            { model: BookType }
        ]
    });
};

// ADD/CREATE
const addBPT = async (bookPostType) => {
    return await BookPostType.create(bookPostType);
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






/*import { BookPostType } from './model.js';

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
};*/