// ----------------------------- CATEGORY PER BOOK REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { CategoryPerBook } from './Model.js';
import { Category } from '../Category/Model.js';
import { BookPost } from '../BookPost/Model.js';


// SHOW ALL CATEGORY PER BOOK WITH RELATED CATEGORY AND BOOKPOST
const showAll = async () => {
    return await CategoryPerBook.findAll({
        include: [
            { model: Category }, // Incluir datos de Category
            { model: BookPost }   // Incluir datos de BookPost
        ]
    });
};


// SEARCH CATEGORY PER BOOK BY ID WITH RELATED DATA
const findCategoryPerBookByID = async (id) => {
    return await CategoryPerBook.findOne({
        where: { codeMiddleC: id },
        include: [
            { model: Category }, // Incluir datos de Category
            { model: BookPost }   // Incluir datos de BookPost
        ]
    });
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

// Verificar si existe la categoría
const checkCategoryExists = async (codeCategory) => {
    return await Category.findOne({ where: { codeC: codeCategory } });
};

// Verificar si existe el libro
const checkBookPostExists = async (codeBook) => {
    return await BookPost.findOne({ where: { codeP: codeBook } });
};

// Exportar repos
export const reposCPB = {
    showAll,
    findCategoryPerBookByID,
    addCategoryPerBook,
    deleteCategoryPerBook,
    checkCategoryExists,
    checkBookPostExists
};
