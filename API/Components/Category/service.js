// ----------------------------- CATEGORY SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposC } from '../Category/Repository.js';

// SHOW ALL CATEGORIES
const showAllCategories = async () => {
    const categories = await reposC.showAll();
    return { categories };
};

// SEARCH BY ID
const searchById = async (id) => {
    const category = await reposC.findCategoryByID(id);
    return { category };
};

// ADD CATEGORY
const addCategory = async (category) => {
    const newCategory = await reposC.addCategory(category);
    return { newCategory };
};

// UPDATE CATEGORY
const updateCategory = async (id, category) => {
    const updatedCategory = await reposC.updateCategory(id, category);
    return { updatedCategory };
};

// DELETE CATEGORY
const deleteCategory = async (id) => {
    const deletedCategory = await reposC.deleteCategory(id);
    return { deletedCategory };
};

// FILTER CATEGORIES BY NAME
const filterByName = async (name) => {
    const categories = await reposC.filterByName(name);
    return { categoriesByName: categories };
};


export const serviceC = {
    showAllCategories,
    searchById,
    addCategory,
    updateCategory,
    deleteCategory,
    filterByName
};
