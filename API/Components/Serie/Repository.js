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


// Verificar si el codeP existe (clave foránea)
const checkCodePExists = async (codeP) => {
    const { BookPost } = await import('../BookPost/Model.js');
    return await BookPost.findOne({ where: { codeP } });
};

// Verificar si el codeS existe (clave foránea)
const checkCodeSExists = async (codeS) => {
    const { SimilarProduct } = await import('../SimilarProducts/Model.js');
    return await SimilarProduct.findOne({ where: { codeS } });
};

// Verificar si ya existe una serie con los mismos datos
const findDuplicateSerie = async (codeP, codeS, seriesName) => {
    return await Serie.findOne({
        where: {
            [Sequelize.Op.or]: [
                { codeP },
                { codeS },
                { seriesName }
            ]
        }
    });
};

//export this module repos
export const reposSeries = {
    showAll,
    findByCode,
    addS,
    updateS,
    deleteS,
    checkCodePExists,
    checkCodeSExists,
    findDuplicateSerie
}