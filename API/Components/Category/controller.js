// ----------------------------- CATEGORY CONTROLLER -----------------------------
import { serviceC } from './Service.js';

// GET ALL CATEGORIES (GET)
const getAllCategories = async (req, res) => {
    try {
        const categories = await serviceC.showAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching categories', error });
    }
};

// SEARCH CATEGORY BY ID (GET)
const searchCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await serviceC.searchById(id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error searching category', error });
    }
};

// ADD NEW CATEGORY (POST)
const addCategory = async (req, res) => {
    const { codeC, nameC, description } = req.body;

    // Validación de campos vacíos
    if (!codeC || !nameC || !description) {
        return res.status(400).json({ message: 'All fields (codeC, nameC, description) are required' });
    }

    try {
        // Verificar si la categoría ya existe
        const existingCategory = await serviceC.searchById(codeC);
        if (existingCategory.category) {
            return res.status(400).json({ message: 'Category with the same code already exists' });
        }

        const newCategory = await serviceC.addCategory(req.body);
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error adding category', error });
    }
};

// UPDATE CATEGORY BY ID (PUT)
const updateCategory = async (req, res) => {
    const { id } = req.params;
    const { nameC, description } = req.body;

    // Validación de campos vacíos
    if (!nameC || !description) {
        return res.status(400).json({ message: 'Fields nameC and description are required' });
    }

    try {
        const updatedCategory = await serviceC.updateCategory(id, req.body);
        if (updatedCategory.updatedCategory) {
            res.status(200).json(updatedCategory);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating category', error });
    }
};

// DELETE CATEGORY BY ID (DELETE)
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedCategory = await serviceC.deleteCategory(id);
        if (deletedCategory) {
            res.status(200).json(deletedCategory);
        } else {
            res.status(404).json({ message: 'Category not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error deleting category', error });
    }
};


const filterCategories = async (req, res) => {
    try {
        const { name } = req.params;
        const categories = await serviceC.filterByName(name);
        if (categories.categoriesByName.length > 0) {
            res.status(200).json(categories);
        } else {
            res.status(404).json({ message: 'No categories found with that name' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error filtering categories', error: error.message });
    }
};


export const controllerC = {
    getAllCategories,
    searchCategory,
    addCategory,
    updateCategory,
    deleteCategory,
    filterCategories
};
