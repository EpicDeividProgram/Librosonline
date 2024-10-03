// --------------------------------------------------------
// --------------- TYPE-OF-USER REPOSITORY -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
// TYPE-OF-USER OBJ -- TABLE (MODEL)
import {TypeOfUser} from './Model.js'
// *****************************************************************************
//** 
// SHOW ALL
const showAll = async () => {
    return await TypeOfUser.findAll();
};
//** 
// SEARCH :USERNAME
const findTypeByUsername = async (username) => {
    return await TypeOfUser.findOne({where: { username: username }});
};
//** 
// ADD/CREATE
const addT = async (typeUser) => {
    const newTypeOfUser = await TypeOfUser.create(typeUser);
    return newTypeOfUser;
};

//** 
// UPDATE
const updateT = async (username, typeU) => {
    const updTypeOfUser = await TypeOfUser.findOne({where: { username: username }});
    updTypeOfUser.typeOfUser = typeU.typeOfUser;
    await updTypeOfUser.save();
    return updTypeOfUser;
};
//** 
// DELETE 
const deleteT = async (username) => {
    const delTypeOfUser = await TypeOfUser.findOne({where: { username: username }});
    await delTypeOfUser.destroy();
    return delTypeOfUser;
};
//
//
//export this module repos
export const reposT = {
    showAll,
    findTypeByUsername,
    addT,
    updateT,
    deleteT
}