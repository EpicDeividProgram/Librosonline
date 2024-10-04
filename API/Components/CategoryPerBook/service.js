// ----------------------------- CATEGORY PER BOOK SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposCPB } from './Repository.js';

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
// Agregar la validación de duplicado
const addCategoryPerBook = async (categoryPerBook) => {
    const { codeMiddleC, codeCategory, codeBook } = categoryPerBook;

    // Verificar si la relación ya existe
    const existingRelation = await reposCPB.findCategoryPerBookByID(codeMiddleC);
    if (existingRelation) {
        throw new Error('Category per book relationship already exists');
    }

    const newCategoryPerBook = await reposCPB.addCategoryPerBook(categoryPerBook);
    return { newCategoryPerBook };
};

// DELETE CATEGORY PER BOOK
const deleteCategoryPerBook = async (id) => {
    return { deletedCategoryPerBook: await reposCPB.deleteCategoryPerBook(id) };
};

// Verificar si existe el código de categoría
const checkCategoryExists = async (codeCategory) => {
    const category = await reposCPB.checkCategoryExists(codeCategory);
    return category !== null;
};

// Verificar si existe el código de libro
const checkBookPostExists = async (codeBook) => {
    const bookPost = await reposCPB.checkBookPostExists(codeBook);
    return bookPost !== null;
};



// Exportar servicio
export const serviceCPB = {
    showAllCategoryPerBook,
    searchById,
    addCategoryPerBook,
    deleteCategoryPerBook,
    checkCategoryExists,
    checkBookPostExists
};
