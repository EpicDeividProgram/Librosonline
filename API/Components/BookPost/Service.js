// --------------------------------------------------------
// --------------- BOOKPOST SERVICE -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {reposBookPost} from './Repository.js';

// SHOW ALL POSTS
const showAllTypes = async () => {
    const postB = await reposBookPost.showAll();
    return { BookPost: postB};
};

// SEARCH BY CODE (:codeP)
const searchByCode = async (codeP) => {
    return { BookPost: await reposBookPost.findPostByCode(codeP)};
};

// ADD (:codeP)
const addBookPost = async (postBook) => {
    try {
        return { newPostB: await reposBookPost.addBookP(postBook) };
    } catch (error) {
        throw new Error(error.message);
    }
};

// UPDATE (:codeP)
const updatePost = async (codeP, postB) => {
    try {
        return { updPostB: await reposBookPost.updateBookP(codeP, postB) };
    } catch (error) {
        throw new Error(error.message);
    }
};

// DELETE (:codeP)
const deletePost = async (codeP) => {
    return { delPostB: await reposBookPost.deleteBookP(codeP)};
};

//export this servicePost module
export const servicePost = {
    showAllTypes,
    searchByCode,
    addBookPost,
    updatePost,
    deletePost,
}
