// ----------------------------- BookPost&Type SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposBPT } from './respo.js';

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
