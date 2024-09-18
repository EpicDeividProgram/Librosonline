// --------------------------------------------------------
// --------------- USER REPOSITORY -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
// USER OBJ -- TABLE (MODEL)
import {User} from './Model.js'
// *****************************************************************************
//** 

// SHOW ALL
const showAll = async () => {
    return await User.findAll();
};
//** 
// SEARCH :IDU
const searchThisUser = async (idU) => {
    return await User.findOne({where: { idU: idU }});
};
//** 
// ADD/CREATE
const addU = async (objUser) => {
    const newUser = await User.create(objUser);
    return newUser;
};

//** 
// UPDATE
const updateU = async (idU, objU) => {
    const updatedUser = await User.findOne({where: { idU: idU }});
    updatedUser.name = objU.name;
    updatedUser.lastName = objU.lastName;
    updatedUser.birthDate = objU.birthDate;
    updatedUser.address = objU.address;
    updatedUser.email = objU.email;
    updatedUser.typeOfUser = objU.typeOfUser;
    await updatedUser.save();
    return updatedUser;
};
//** 
// DELETE 
const deleteU = async (idU) => {
    const deleteThisUser = await User.findOne({where: { idU: idU }});
    await deleteThisUser.destroy();
    return deleteThisUser;
};
//
//
//export this module repos
export const reposU = {
    showAll,
    searchThisUser,
    addU,
    updateU,
    deleteU
}