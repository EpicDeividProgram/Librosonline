// --------------------------------------------------------
// --------------- BOOKTYPE REPOSITORY -------------------
// --------------------------------------------------------
// BOOKTYPE OBJ -- TABLE (MODEL)
import {BookType} from './Model.js'
// *****************************************************************************
//** 
// SHOW ALL
const showAll = async () => {
    return await BookType.findAll();
};

//** 
// SEARCH :CODET
const findTypeByCode = async (codeType) => {
    return await BookType.findOne({where: { codeT: codeType }});
};
//** 
// ADD/CREATE
const addBookT = async (typeBook) => {
    const newTypeOfBook = await BookType.create(typeBook);
    return newTypeOfBook;
};

//** 
// UPDATE
const updateBookT = async (codeT, typeB) => {
    const updTypeOfBook = await BookType.findOne({where: { codeT: codeT }});
    updTypeOfBook.descriptionType = typeB.descriptionType;
    await updTypeOfBook.save();
    return updTypeOfBook;
};
//** 
// DELETE 
const deleteBookT = async (codeT) => {
    const delTypeOfBook = await BookType.findOne({where: { codeT: codeT }});
    await delTypeOfBook.destroy();
    return delTypeOfBook;
};
//
//export this module repos
export const reposBookT = {
    showAll,
    findTypeByCode,
    addBookT,
    updateBookT,
    deleteBookT
}