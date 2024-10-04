// ----------------------------- AUTHOR REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { Author } from './Model.js';

// SHOW ALL AUTHORS
const showAll = async () => {
    return await Author.findAll();
};

// SEARCH AUTHOR BY ID
const findAuthorById = async (id) => {
    return await Author.findOne({ where: { idA: id } });
};

// ADD AUTHOR
const addA = async (author) => {
    const newAuthor = await Author.create(author);
    return newAuthor;
};

// UPDATE AUTHOR
const updateA = async (id, author) => {
    const updAuthor = await Author.findOne({ where: { idA: id } });
    updAuthor.fullname = author.fullname;
    updAuthor.biography = author.biography;
    updAuthor.detailsAbout = author.detailsAbout;
    await updAuthor.save();
    return updAuthor;
};

// DELETE AUTHOR
const deleteA = async (id) => {
    const delAuthor = await Author.findOne({ where: { idA: id } });
    await delAuthor.destroy();
    return delAuthor;
};

// FILTER AUTHOR BY BIOGRAPHY
const filterByBiography = async (biography) => {
    return await Author.findAll({ where: { biography } });
};

// Exportación
export const reposA = {
    showAll,
    findAuthorById,
    addA,
    updateA,
    deleteA,
    filterByBiography
};
