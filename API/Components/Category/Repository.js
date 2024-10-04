// ----------------------------- CATEGORY REPOSITORY -----------------------------
// --- IMPORTACIONES ---
import { Category } from './Model.js';
import { Op } from 'sequelize';

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


const filterByName = async (name) => {
    return await Category.findAll({
        where: {
            nameC: { [Op.like]: `%${name}%` }
        }
    });
};

// Buscar categoría por codeC o nameC
const findCategoryByCodeOrName = async (codeC, nameC) => {
    return await Category.findOne({
        where: {
            [Op.or]: [
                { codeC: codeC },
                { nameC: nameC }
            ]
        }
    });
};

// Buscar categoría por nameC
const findCategoryByName = async (nameC) => {
    return await Category.findOne({
        where: { nameC }
    });
};

export const reposC = {
    showAll,
    findCategoryByID,
    addCategory,
    updateCategory,
    deleteCategory,
    filterByName,
    findCategoryByCodeOrName,
    findCategoryByName
};
