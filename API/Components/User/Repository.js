// --------------------------------------------------------
// --------------- USER REPOSITORY -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
// USER OBJ -- TABLE (MODEL)
import {User} from './Model.js'
// *****************************************************************************
//** 
/*
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
    updTypeOfUser.password = typeU.password;
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
export const reposU = {
    showAll,
    findTypeByUsername,
    addT,
    updateT,
    deleteT
}*/