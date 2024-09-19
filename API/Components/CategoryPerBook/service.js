// ----------------------------- CATEGORY PER BOOK SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposCPB } from './repos.js';

// SHOW ALL CATEGORY PER BOOK
const showAllCategoryPerBook = async () => {
    const categoriesPerBook = await reposCPB.showAll();
    return { categoriesPerBook };
};

// SEARCH CATEGORY PER BOOK BY ID
const searchById = async (id) => {
    return { categoryPerBook: await reposCPB.findCategoryPerBookByID(id) };
};

// ADD CATEGORY PER BOOK
const addCategoryPerBook = async (categoryPerBook) => {
    return { newCategoryPerBook: await reposCPB.addCategoryPerBook(categoryPerBook) };
};

// DELETE CATEGORY PER BOOK
const deleteCategoryPerBook = async (id) => {
    return { deletedCategoryPerBook: await reposCPB.deleteCategoryPerBook(id) };
};

// Exportar servicio
export const serviceCPB = {
    showAllCategoryPerBook,
    searchById,
    addCategoryPerBook,
    deleteCategoryPerBook
};
