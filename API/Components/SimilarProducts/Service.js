// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS (SERVICE module) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {reposProdS} from './Repository.js';

// SHOW ALL SIM PRODS
const showAllSimProd = async () => {
    const simProds = await reposProdS.showAll();
    return { SimilarProducts: simProds};
};

// SEARCH BY CODE (:codeS)
const searchByCode = async (codeS) => {
    return { SimilarProduct: await reposProdS.findByCode(codeS)};
};

// ADD (:codeS)
const addProdSim = async (simProd) => {
    return { newSimP: await reposProdS.addProdS(simProd)};
};

// UPDATE (:codeS)
const updateProdSim = async (codeS, simProd) => {
    return { updSimP: await reposProdS.updateProdS(codeS, simProd)};
};

// DELETE (:codeS)
const deleteProdSim = async (codeS) => {
    return { delSimP: await reposProdS.deleteProdS(codeS)};
};

// FILTER SIM PRODS By NAME (:name)
const filterByName = async (nameP) => {
    const simproducts = await reposProdS.showAll();
    return { simProdByName: simproducts.filter(simP => simP.name == nameP)};
};

//export this service module
export const serviceSim = {
    showAllSimProd,
    searchByCode,
    addProdSim,
    updateProdSim,
    deleteProdSim,
    filterByName
}