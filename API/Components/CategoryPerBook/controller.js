// ----------------------------- CATEGORY PER BOOK CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceCPB } from './Service.js';

// GET ALL CATEGORY PER BOOK (GET)
const getAllCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.showAllCategoryPerBook());
};

// SEARCH CATEGORY PER BOOK BY ID (GET)
const searchCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.searchById(req.params.id));
};

// ADD CATEGORY PER BOOK (POST)
const addCategoryPerBook = async (req, res) => {
    const { codeMiddleC, codeCategory, codeBook } = req.body;

    // Validación de campos vacíos
    if (!codeMiddleC || !codeCategory || !codeBook) {
        return res.status(400).json({ message: 'All fields (codeMiddleC, codeCategory, codeBook) are required' });
    }

    try {
        // Validar si las claves foráneas existen (validación de integridad)
        const validCategory = await serviceCPB.checkCategoryExists(codeCategory);
        const validBookPost = await serviceCPB.checkBookPostExists(codeBook);

        if (!validCategory) {
            return res.status(400).json({ message: 'Invalid category: The provided codeCategory does not exist' });
        }

        if (!validBookPost) {
            return res.status(400).json({ message: 'Invalid book post: The provided codeBook does not exist' });
        }

        // Verificar si la relación ya existe
        const existingRelation = await serviceCPB.searchById(codeMiddleC);
        if (existingRelation.categoryPerBook) {
            return res.status(400).json({ message: 'The relationship already exists' });
        }

        const newCategoryPerBook = await serviceCPB.addCategoryPerBook(req.body);
        res.status(201).json(newCategoryPerBook);
    } catch (error) {
        res.status(500).json({ message: 'Error adding category per book', error: error.message });
    }
};

// DELETE CATEGORY PER BOOK (DELETE)
const deleteCategoryPerBook = async (req, res) => {
    res.status(200).json(await serviceCPB.deleteCategoryPerBook(req.params.id));
};

// Exportación
export const controllerCPB = {
    getAllCategoryPerBook,
    searchCategoryPerBook,
    addCategoryPerBook,
    deleteCategoryPerBook
};
