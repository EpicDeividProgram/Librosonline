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
    return await BookPost.findOne({ where: { codeP: codePost } });
};

//** 
// ADD/CREATE BOOK POST
const addBookP = async (postBook) => {
    try {
        const newPostBook = await BookPost.create(postBook);
        return newPostBook;
    } catch (error) {
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            throw new Error('Invalid foreign key: idA (Author) or idU (User) does not exist');
        }
        throw error;
    }
};

//** 
// UPDATE BOOK POST
const updateBookP = async (codeP, postB) => {
    try {
        const updPostBook = await BookPost.findOne({ where: { codeP: codeP } });
        if (!updPostBook) {
            throw new Error('Book post not found');
        }

        updPostBook.name = postB.name;
        updPostBook.idA = postB.idA;
        updPostBook.idU = postB.idU;
        updPostBook.postDescription = postB.postDescription;
        await updPostBook.save();
        return updPostBook;
    } catch (error) {
        if (error.name === 'SequelizeForeignKeyConstraintError') {
            throw new Error('Invalid foreign key: idA (Author) or idU (User) does not exist');
        }
        throw error;
    }
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