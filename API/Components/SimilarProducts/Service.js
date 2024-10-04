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
// Añadir validaciones de duplicados y claves foraneas antes de agregar un producto similar
const addProdSim = async (simProd) => {
    const { userId, name } = simProd;

    // Verificar si el producto similar ya existe
    const duplicateSimProd = await reposProdS.findDuplicateSimProd(name);
    if (duplicateSimProd) {
        throw new Error('A similar product with the same name already exists');
    }

    // Verificar si la clave foránea existe
    const validForeignKey = await reposProdS.checkUserIdExists(userId);
    if (!validForeignKey) {
        throw new Error('Invalid foreign key: userId does not exist');
    }

    return { newSimProd: await reposProdS.addProdS(simProd) };
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

// Verificar si la clave foránea (userId) existe
const checkForeignKey = async (userId) => {
    const validUser = await reposProdS.checkUserIdExists(userId);
    return validUser !== null;
};

// Verificar si ya existe un producto similar con el mismo nombre
const checkDuplicateSimProd = async (name) => {
    const existingSimProd = await reposProdS.findDuplicateSimProd(name);
    return existingSimProd !== null;
};



//export this service module
export const serviceSim = {
    showAllSimProd,
    searchByCode,
    addProdSim,
    updateProdSim,
    deleteProdSim,
    filterByName,
    checkForeignKey,
    checkDuplicateSimProd
}