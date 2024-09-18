// --------------------------------------------------------
// --------------- USER SERVICE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {reposU} from './Repository.js';
/*
// SHOW ALL PRODUCTS
const showAllTypes = async () => {
    const typesU = await reposT.showAll();
    return { TypeOfUsers: typesU};
};

// SEARCH BY USERNAME (:username)
const searchByUsername = async (username) => {
    return { typeOfUser: await reposT.findTypeByUsername(username)};
};

// ADD (:username)
const addTypeUser = async (typeUser) => {
    return { newTypeU: await reposT.addT(typeUser)};
};

// UPDATE (:username)
const updateTypeUser = async (username, typeU) => {
    return { updTypeU: await reposT.updateT(username, typeU)};
};

// DELETE (:username)
const deleteTypeUser = async (username) => {
    return { delTypeU: await reposT.deleteT(username)};
};

//export this serviceT module
/*
export const serviceU = {
    showAllTypes,
    searchByUsername,
    addTypeUser,
    updateTypeUser,
    deleteTypeUser
}*/

// FILTER PRODUCTS By QUANTITY (:QUANTITY)
/*const filterByQuantity = async (quantity) => {
    const products = await reposP.showAll();
    return { productsByQuantity: products.filter(prod => prod.quantity == quantity)};
};*/


/*
.showAllTypes()
.searchByUsername(req.params.username)
.addTypeUser(req.body)
.updateTypeUser(req.params.username, req.body)
.deleteTypeUser(req.params.username)
*/