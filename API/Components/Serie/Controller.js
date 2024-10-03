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

//ADD SERIE. (POST)
const addSerie = async (req, res)=>{
    res.status(200).json(await serviceSerie.addSaga(req.body));
}
//UPDATE SERIE (PUT)
const updateSerie = async (req, res)=> {
    res.status(200).json(await serviceSerie.updateSaga(req.params.codeR, req.body))
}

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