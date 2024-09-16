// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS CONTROLLER -------------------
// --------------------------------------------------------

// ---*** IMPORTACIONES ***---
import { serviceSim } from './Service.js';
// === HTTP VERBS & ASYNC FUNCS ===
//GET SIM PRODS. (GET)
const getAllSimProd = async(req, res)=>{
    res.status(200).json(await serviceSim.showAllSimProd())
}
//

//SEARCH SIM PROD. (GET)
const searchSimProd = async (req, res)=>{
    res.status(200).json(await serviceSim.searchByCode(req.params.codeS))
}

//ADD SIM PROD. (POST)
const addSimProd = async (req, res)=>{
    res.status(200).json(await serviceSim.addProdSim(req.body));
}
//UPDATE SIM PROD. (PUT)
const updateSimProd = async (req, res)=> {
    res.status(200).json(await serviceSim.updateProdSim(req.params.codeS, req.body))
}

//DELETE TYPE (DELETE)
const deleteSimProd = async (req, res) =>{
    res.status(200).json(await serviceSim.deleteProdSim(req.params.codeS));
}

//FILTER SIM PROD BY NAME (GET)
const filterProdByName = async (req, res)=>{
    res.status(200).json(await serviceSim.filterByName(req.params.name))
}

//export this controller
export const controllerS= {
    getAllSimProd,
    addSimProd,
    searchSimProd,
    updateSimProd,
    deleteSimProd,
    filterProdByName
}
// ----------------------=================