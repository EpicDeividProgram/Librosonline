// --------------------------------------------------------
// --------------- BOOKTYPE SERVICE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {reposBookT} from './Repository.js';

// SHOW ALL BOOKTYPES
const showAllTypes = async () => {
    const typesB = await reposBookT.showAll();
    return { TypeOfBooks: typesB};
};

// SEARCH BY CODE (:codeT)
const searchByCode = async (codeT) => {
    return { typeOfBook: await reposBookT.findTypeByCode(codeT)};
};

// ADD (:codeT)
const addTypeBook = async (bookType) => {
    if (!bookType.codeT || !bookType.descriptionType) {
        throw new Error('Both codeT and descriptionType are required');
    }
    return { newTypeU: await reposBookT.addBookT(bookType) };
};

// UPDATE (:codeT)
const updateTypeBook = async (codeT, typeB) => {
    if (!typeB.descriptionType) {
        throw new Error('DescriptionType is required');
    }
    return { updTypeU: await reposBookT.updateBookT(codeT, typeB) };
};

// DELETE (:codeT)
const deleteTypeBook = async (codeT) => {
    return { delTypeU: await reposBookT.deleteBookT(codeT)};
};


// FILTER BOOK-TYPES By DESCRIPTION-TYPE (:description)
const filterByQuantity = async (descripT) => {
    const booktypes = await reposBookT.showAll();
    return { booktByDescrip: booktypes.filter(bookT => bookT.descriptionType == descripT)};
};

//export this serviceT module
export const serviceBookT = {
    showAllTypes,
    searchByCode,
    addTypeBook,
    updateTypeBook,
    deleteTypeBook,
    filterByQuantity
}