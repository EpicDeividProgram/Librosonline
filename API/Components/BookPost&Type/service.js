// ----------------------------- BookPost&Type SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposBPT } from './Repository.js';

// SHOW ALL
const showAllBookPostType = async () => {
    const bookPostTypes = await reposBPT.showAll();
    return { BookPostTypes: bookPostTypes };
};

// SEARCH BY ID
const searchById = async (id) => {
    return { bookPostType: await reposBPT.findById(id) };
};

// ADD BOOKPOST&TYPE
const addBookPostType = async (bookPostType) => {
    const { codeBook, codeType } = bookPostType;

    // Verificar que el codeBook exista en la tabla BookPost
    const bookPostExists = await reposBPT.checkBookPostExists(codeBook);
    if (!bookPostExists) {
        throw new Error(`BookPost with codeBook ${codeBook} does not exist`);
    }

    // Verificar que el codeType exista en la tabla BookType
    const bookTypeExists = await reposBPT.checkBookTypeExists(codeType);
    if (!bookTypeExists) {
        throw new Error(`BookType with codeType ${codeType} does not exist`);
    }

    // Si todo es válido, proceder a agregar el registro
    return { newBookPostType: await reposBPT.addBPT(bookPostType) };
};

// DELETE BOOKPOST&TYPE
const deleteBookPostType = async (id) => {
    return { delBookPostType: await reposBPT.deleteBPT(id) };
};

// Exportar servicio
export const serviceBPT = {
    showAllBookPostType,
    searchById,
    addBookPostType,
    deleteBookPostType
};
