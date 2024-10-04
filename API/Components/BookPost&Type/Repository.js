// ----------------------------- BookPost&Type REPOSITORY -----------------------------
// --- IMPORTACIONES ---
// --- respo.js ---
import { BookPostType } from './Model.js';
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

// Verificar si el codeBook existe en BookPost
const checkBookPostExists = async (codeBook) => {
    const bookPost = await BookPost.findOne({ where: { codeP: codeBook } });
    return !!bookPost; // Retorna true si existe, false si no.
};

// Verificar si el codeType existe en BookType
const checkBookTypeExists = async (codeType) => {
    const bookType = await BookType.findOne({ where: { codeT: codeType } });
    return !!bookType; // Retorna true si existe, false si no.
};

// Exportar repos
export const reposBPT = {
    showAll,
    findById,
    addBPT,
    deleteBPT,
    checkBookPostExists,   // Nueva función
    checkBookTypeExists    // Nueva función
};