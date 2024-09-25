// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS REPOSITORY -------------------
// --------------------------------------------------------
// SIMILAR PRODUCTS OBJ -- TABLE (MODEL)
import { Serie } from './pruebaSerie.js';
// *****************************************************************************
//** 
// SHOW ALL
const showAll = async () => {
    return await Serie.findAll();
};

//** 
// SEARCH :CODES
const findByCode = async (codeR) => {
    return await Serie.findOne({where: { codeR: codeR }});
};

//** 
// ADD/CREATE
const addS = async (saga) => {
    const newSerie = await Serie.create(saga);
    return newSerie;
};

//** 
// UPDATE
const updateS = async (codeR, saga) => {
    const updSaga = await Serie.findOne({where: { codeR: codeR }});
    updSaga.codeP = saga.codeP;
    updSaga.codeS = saga.codeS;
    updSaga.seriesName = saga.seriesName;
    await updSaga.save();
    return updSaga;
};
//** 
// DELETE 
const deleteS = async (codeR) => {
    const delSaga = await Serie.findOne({where: { codeR: codeR }});
    await delSaga.destroy();
    return delSaga;
};
//

//export this module repos
export const reposSeries = {
    showAll,
    findByCode,
    addS,
    updateS,
    deleteS
}