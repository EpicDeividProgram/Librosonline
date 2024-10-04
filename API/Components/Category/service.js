// ----------------------------- CATEGORY SERVICE -----------------------------
// --- IMPORTACIONES ---
import { reposC } from './Repository.js';

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
    const { codeC, nameC } = category;

    // Verificar si ya existe una categoría con el mismo codeC o nameC
    const existingCategory = await reposC.findCategoryByCodeOrName(codeC, nameC);
    if (existingCategory) {
        throw new Error('Category with the same code or name already exists');
    }

    const newCategory = await reposC.addCategory(category);
    return { newCategory };
};

// UPDATE CATEGORY
const updateCategory = async (id, category) => {
    const { nameC } = category;

    // Verificar si el nombre ya existe en otra categoría
    const existingCategory = await reposC.findCategoryByName(nameC);
    if (existingCategory && existingCategory.codeC !== id) {
        throw new Error('Another category with the same name already exists');
    }

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
