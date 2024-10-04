// --------------------------------------------------------
// --------------- SERIE (SERVICE module) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---

import {reposSeries} from './Repository.js';

// SHOW ALL 
const showAllSagas = async () => {
    const sagas = await reposSeries.showAll();
    return { Series: sagas};
};

// SEARCH BY CODE (:codeR)
const searchByCode = async (codeR) => {
    return { Serie: await reposSeries.findByCode(codeR)};
};

// ADD (:codeR)
// Añadir validaciones de duplicados y claves foráneas antes de agregar una serie
const addSaga = async (saga) => {
    const { codeP, codeS, seriesName } = saga;

    // Verificar si la serie ya existe
    const existingSerie = await reposSeries.findDuplicateSerie(codeP, codeS, seriesName);
    if (existingSerie) {
        throw new Error('A series with the same codeP, codeS, or seriesName already exists');
    }

    // Verificar si las claves foráneas existen
    const validForeignKeys = await reposSeries.checkForeignKeys(codeP, codeS);
    if (!validForeignKeys) {
        throw new Error('Invalid foreign keys: codeP or codeS does not exist');
    }

    const newSerie = await reposSeries.addS(saga);
    return { newSerie };
};

// UPDATE (:codeR)
const updateSaga = async (codeR, simProd) => {
    return { updS: await reposSeries.updateS(codeR, simProd)};
};

// DELETE (:codeR)
const deleteSaga = async (codeR) => {
    return { delS: await reposSeries.deleteS(codeR)};
};


// Verificar si las claves foráneas existen
const checkForeignKeys = async (codeP, codeS) => {
    const validCodeP = await reposSeries.checkCodePExists(codeP);
    const validCodeS = await reposSeries.checkCodeSExists(codeS);
    return validCodeP && validCodeS;
};

// Verificar si ya existe una serie con los mismos datos
const checkDuplicateSerie = async (codeP, codeS, seriesName) => {
    const existingSerie = await reposSeries.findDuplicateSerie(codeP, codeS, seriesName);
    return existingSerie !== null;
};




//export this service module
export const serviceSerie = {
    showAllSagas,
    searchByCode,
    addSaga,
    updateSaga,
    deleteSaga,
    checkForeignKeys,
    checkDuplicateSerie 
}