// --------------------------------------------------------
// --------------- USER SERVICE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {reposU} from './Repository.js';
// SHOW ALL PRODUCTS
const showAllUsers = async () => {
    const allUsers = await reposU.showAll();
    return { users: allUsers};
};

// SEARCH BY ID (:idU)
const searchUserById = async (idU) => {
    return { user: await reposU.searchThisUser(idU)};
};

// FILTER USERS BY TYPE (:type)
const filterByType = async (typeU) => {
    const filterUsers = await reposU.showAll();
    return { userByType: filterUsers.filter(userX => userX.type == typeU)};
};

// ADD (:idU)
const addUser = async (objUser) => {
    return { newUser: await reposU.addU(objUser)};
};

// UPDATE (:idU)
const updateUser = async (idU, objU) => {
    return { updateU: await reposU.updateU(idU, objU)};
};

// DELETE (:idU)
const deleteUser = async (idU) => {
    return { deleteU: await reposU.deleteU(idU)};
};

//export this service module
export const serviceU = {
    showAllUsers,
    searchUserById,
    filterByType,
    addUser,
    updateUser,
    deleteUser
}