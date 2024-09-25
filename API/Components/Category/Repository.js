// ----------------------------- CATEGORY REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { Category } from './model.js';

// SHOW ALL CATEGORIES
const showAll = async () => {
    return await Category.findAll();
};

// SEARCH CATEGORY BY ID
const findCategoryByID = async (id) => {
    return await Category.findOne({ where: { codeC: id } });
};

// ADD/CREATE CATEGORY
const addCategory = async (category) => {
    return await Category.create(category);
};

// UPDATE CATEGORY
const updateCategory = async (id, category) => {
    const categoryToUpdate = await Category.findOne({ where: { codeC: id } });
    if (categoryToUpdate) {
        categoryToUpdate.nameC = category.nameC;
        categoryToUpdate.description = category.description;
        await categoryToUpdate.save();
        return categoryToUpdate;
    }
    return null;
};

// DELETE CATEGORY
const deleteCategory = async (id) => {
    const categoryToDelete = await Category.findOne({ where: { codeC: id } });
    if (categoryToDelete) {
        await categoryToDelete.destroy();
        return categoryToDelete;
    }
    return null;
};

// FILTER CATEGORIES BY NAME
const filterByName = async (name) => {
    return await Category.findAll({ where: { nameC: { [Op.like]: `%${name}%` } } });
};

export const reposC = {
    showAll,
    findCategoryByID,
    addCategory,
    updateCategory,
    deleteCategory,
    filterByName
};
