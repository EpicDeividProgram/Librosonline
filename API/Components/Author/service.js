// ----------------------------- AUTHOR SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposA } from './Repository.js';

// SHOW ALL AUTHORS
const showAllAuthors = async () => {
    const authors = await reposA.showAll();
    return { Authors: authors };
};

// FILTER AUTHORS BY BIOGRAPHY
const filterByBiography = async (biography) => {
    const authors = await reposA.filterByBiography(biography);
    return { authorsByBiography: authors };
};

// SEARCH AUTHOR BY ID
const searchById = async (id) => {
    return { author: await reposA.findAuthorById(id) };
};

// ADD AUTHOR
const addAuthor = async (author) => {
    return { newAuthor: await reposA.addA(author) };
};

// UPDATE AUTHOR
const updateAuthor = async (id, author) => {
    return { updAuthor: await reposA.updateA(id, author) };
};

// DELETE AUTHOR
const deleteAuthor = async (id) => {
    return { delAuthor: await reposA.deleteA(id) };
};

// SEARCH AUTHOR BY FULLNAME
const searchByFullname = async (fullname) => {
    return { author: await reposA.findByFullname(fullname) };
};

// Exportación
export const serviceA = {
    showAllAuthors,
    filterByBiography,
    searchById,
    addAuthor,
    updateAuthor,
    deleteAuthor,
    searchByFullname
};