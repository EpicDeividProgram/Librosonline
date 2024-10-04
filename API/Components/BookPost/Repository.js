// --------------------------------------------------------
// --------------- BOOKPOST REPOSITORY -------------------
// --------------------------------------------------------
// BOOKTYPE OBJ -- TABLE (MODEL)
import {BookPost} from './Model.js'
// *****************************************************************************
//** 

// SHOW ALL
const showAll = async () => {
    return await BookPost.findAll();
};

//** 
// SEARCH :CODEP
const findPostByCode = async (codePost) => {
    return await BookPost.findOne({where: { codeP: codePost }});
};
//** 
// ADD/CREATE
const addBookP = async (postBook) => {
    const newPostBook = await BookPost.create(postBook);
    return newPostBook;
};

//** 
// UPDATE
const updateBookP = async (codeP, postB) => {
    const updPostBook = await BookPost.findOne({where: { codeP: codeP }});
    updPostBook.name = postB.name;
    updPostBook.idA = postB.idA;
    updPostBook.idU = postB.idU;
    updPostBook.postDescription = postB.postDescription;
    await updPostBook.save();
    return updPostBook;
};
//** 
// DELETE 
const deleteBookP = async (codeP) => {
    const delPostBook = await BookPost.findOne({where: { codeP: codeP }});
    await delPostBook.destroy();
    return delPostBook;
};
//
//export this module repos
export const reposBookPost = {
    showAll,
    findPostByCode,
    addBookP,
    updateBookP,
    deleteBookP
}