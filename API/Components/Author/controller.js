// ----------------------------- AUTHOR CONTROLLER -----------------------------
// --- IMPORTACIONES ---
import { serviceA } from './Service.js';

//GET AUTHORS (GET)
const getAllAuthors = async (req, res) => {
    res.status(200).json(await serviceA.showAllAuthors());
};

// SEARCH AUTHOR (GET)
const searchAuthor = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    const author = await serviceA.searchById(id);
    if (!author) {
        return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(author);
};

// ADD AUTHOR (POST)
const addAuthor = async (req, res) => {
    const { idA, fullname, biography, detailsAbout } = req.body;
    
    // Validar que todos los campos estén presentes
    if (!idA || !fullname || !biography || !detailsAbout) {
        return res.status(400).json({ error: 'ID, fullname, biography, and detailsAbout are required' });
    }

    try {
        const newAuthor = await serviceA.addAuthor(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        // Capturar el error de la validación de Sequelize
        return res.status(500).json({ error: error.message || 'Failed to add author' });
    }
};

// UPDATE AUTHOR (PUT)
const updateAuthor = async (req, res) => {
    const { id } = req.params;
    const { fullname, biography, detailsAbout } = req.body;
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    if (!fullname || !biography || !detailsAbout) {
        return res.status(400).json({ error: 'Fullname, biography, and detailsAbout are required' });
    }
    const updatedAuthor = await serviceA.updateAuthor(id, req.body);
    if (!updatedAuthor) {
        return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json(updatedAuthor);
};


// DELETE AUTHOR (DELETE)
const deleteAuthor = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'ID is required' });
    }
    const deletedAuthor = await serviceA.deleteAuthor(id);
    if (!deletedAuthor) {
        return res.status(404).json({ error: 'Author not found' });
    }
    res.status(200).json({ message: 'Author deleted successfully', deletedAuthor });
};


// FILTER AUTHORS BY BIOGRAPHY (GET)
const filterAuthors = async (req, res) => {
    const { biography } = req.params;
    if (!biography) {
        return res.status(400).json({ error: 'Biography is required' });
    }
    const authors = await serviceA.filterByBiography(biography);
    res.status(200).json(authors);
};


// Exportación
export const controllerA = {
    getAllAuthors,
    addAuthor,
    searchAuthor,
    updateAuthor,
    deleteAuthor,
    filterAuthors
};
