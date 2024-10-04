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
const addSaga = async (saga) => {
    return { newSaga: await reposSeries.addS(saga)};
};

// UPDATE (:codeR)
const updateSaga = async (codeR, simProd) => {
    return { updS: await reposSeries.updateS(codeR, simProd)};
};

// DELETE (:codeR)
const deleteSaga = async (codeR) => {
    return { delS: await reposSeries.deleteS(codeR)};
};


//export this service module
export const serviceSerie = {
    showAllSagas,
    searchByCode,
    addSaga,
    updateSaga,
    deleteSaga
}