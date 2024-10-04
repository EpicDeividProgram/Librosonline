// --------------------------------------------------------
// --------------- TYPE-OF-USER SERVICE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {reposT} from './Repository.js';

// SHOW ALL PRODUCTS
const showAllTypes = async () => {
    const typesU = await reposT.showAll();
    return { TypeOfUsers: typesU};
};

// SEARCH BY USERNAME (:username)
const searchByUsername = async (username) => {
    return { typeOfUser: await reposT.findTypeByUsername(username)};
};

// SEARCH BY TYPE OF USER
const searchByTypeOfUser = async (typeOfUser) => {
    return { typeOfUser: await reposT.findTypeByTypeOfUser(typeOfUser) };
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
export const serviceT = {
    showAllTypes,
    searchByUsername,
    searchByTypeOfUser,
    addTypeUser,
    updateTypeUser,
    deleteTypeUser
};