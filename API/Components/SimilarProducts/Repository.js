// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS REPOSITORY -------------------
// --------------------------------------------------------
// SIMILAR PRODUCTS OBJ -- TABLE (MODEL)
//import { SimilarProduct } from './Model.js';
import { SimilarProduct } from './Model.js';
// *****************************************************************************
//** 
// SHOW ALL
const showAll = async () => {
    return await SimilarProduct.findAll();
};

//** 
// SEARCH :CODES
const findByCode = async (codeP) => {
    return await SimilarProduct.findOne({where: { codeS: codeP }});
};

//** 
// ADD/CREATE
const addProdS = async (simProd) => {
    const newSimProd = await SimilarProduct.create(simProd);
    return newSimProd;
};

//** 
// UPDATE
const updateProdS = async (codeS, simProd) => {
    const updSimProd = await SimilarProduct.findOne({where: { codeS: codeS }});
    updSimProd.userId = simProd.userId;
    updSimProd.name = simProd.name;
    updSimProd.description = simProd.description;
    await updSimProd.save();
    return updSimProd;
};
//** 
// DELETE 
const deleteProdS = async (codeS) => {
    const delSimProd = await SimilarProduct.findOne({where: { codeS: codeS }});
    await delSimProd.destroy();
    return delSimProd;
};


// Verificar si el userId existe (clave foránea)
const checkUserIdExists = async (userId) => {
    const { User } = await import('../User/Model.js');
    return await User.findOne({ where: { idU: userId } });
};

// Verificar si ya existe un producto similar con el mismo nombre
const findDuplicateSimProd = async (name) => {
    return await SimilarProduct.findOne({ where: { name } });
};

//export this module repos
export const reposProdS = {
    showAll,
    findByCode,
    addProdS,
    updateProdS,
    deleteProdS,
    checkUserIdExists,
    findDuplicateSimProd
}