// --------------------------------------------------------
// --------------- SERIE CONTROLLER -------------------
// --------------------------------------------------------
//(RELACIONAR PRODCS SIMILARES EN ESTA TABLA (SERIE - RELATHED SAGA))
// ---*** IMPORTACIONES ***---
import { serviceSerie } from './Service.js';
// === HTTP VERBS & ASYNC FUNCS ===
//GET SERIES. (GET)
const getAllSeries = async(req, res)=>{
    res.status(200).json(await serviceSerie.showAllSagas())
}
//


//SEARCH SERIE. (GET)
const searchSerie = async (req, res)=>{
    res.status(200).json(await serviceSerie.searchByCode(req.params.codeR))
}

// ADD SERIE (POST)
const addSerie = async (req, res) => {
    const { codeP, codeS, seriesName } = req.body;

    // Validación de campos vacíos
    if (!codeP || !codeS || !seriesName) {
        return res.status(400).json({ message: 'All fields (codeP, codeS, seriesName) are required' });
    }

    try {
        // Validar si las claves foráneas existen
        const validForeignKeys = await serviceSerie.checkForeignKeys(codeP, codeS);
        if (!validForeignKeys) {
            return res.status(400).json({ message: 'Invalid foreign keys: codeP or codeS does not exist' });
        }

        // Verificar si ya existe una serie con los mismos datos
        const existingSerie = await serviceSerie.checkDuplicateSerie(codeP, codeS, seriesName);
        if (existingSerie) {
            return res.status(400).json({ message: 'A series with the same codeP, codeS or seriesName already exists' });
        }

        // Crear la nueva serie si todo está bien
        const newSerie = await serviceSerie.addSaga(req.body);
        res.status(201).json(newSerie);
    } catch (error) {
        res.status(500).json({ message: 'Error adding series', error: error.message });
    }
};

// UPDATE SERIE (PUT)
const updateSerie = async (req, res) => {
    const { codeP, codeS, seriesName } = req.body;

    // Validación de campos vacíos
    if (!codeP || !codeS || !seriesName) {
        return res.status(400).json({ message: 'All fields (codeP, codeS, seriesName) are required' });
    }

    try {
        // Actualizar la serie si todo está bien
        const updatedSerie = await serviceSerie.updateSaga(req.params.codeR, req.body);
        res.status(200).json(updatedSerie);
    } catch (error) {
        res.status(500).json({ message: 'Error updating series', error: error.message });
    }
};

//DELETE SERIE (DELETE)
const deleteSerie = async (req, res) =>{
    res.status(200).json(await serviceSerie.deleteSaga(req.params.codeR));
}

//export this controller
export const controllerSerie= {
    getAllSeries,
    addSerie,
    searchSerie,
    updateSerie,
    deleteSerie
}
// ----------------------=================