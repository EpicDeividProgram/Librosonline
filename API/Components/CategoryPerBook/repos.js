// ----------------------------- CATEGORY PER BOOK REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { CategoryPerBook } from './model.js';

// SHOW ALL CATEGORY PER BOOK
const showAll = async () => {
    return await CategoryPerBook.findAll();
};

// SEARCH CATEGORY PER BOOK BY ID
const findCategoryPerBookByID = async (id) => {
    return await CategoryPerBook.findOne({ where: { codeMiddleC: id } });
};

// ADD/CREATE CATEGORY PER BOOK
const addCategoryPerBook = async (categoryPerBook) => {
    return await CategoryPerBook.create(categoryPerBook);
};

// DELETE CATEGORY PER BOOK
const deleteCategoryPerBook = async (id) => {
    const categoryPerBook = await CategoryPerBook.findOne({ where: { codeMiddleC: id } });
    await categoryPerBook.destroy();
    return categoryPerBook;
};

// Exportar repos
export const reposCPB = {
    showAll,
    findCategoryPerBookByID,
    addCategoryPerBook,
    deleteCategoryPerBook
};
