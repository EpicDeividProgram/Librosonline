// --------------------------------------------------------
// --------------- USER SERVICE -------------------
// --------------------------------------------------------
import { reposU } from './Repository.js';

// Show all users
const showAllUsers = async () => {
    return { users: await reposU.showAllUsers() };
};

// Search user by ID
const searchUserById = async (idU) => {
    return { user: await reposU.findUserById(idU) };
};

// Add a new user
const addUser = async (user) => {
    return { newUser: await reposU.addUser(user) };
};

// Update a user by ID
const updateUser = async (idU, userDetails) => {
    return { updatedUser: await reposU.updateUser(idU, userDetails) };
};

// Delete a user by ID
const deleteUser = async (idU) => {
    return { deletedUser: await reposU.deleteUser(idU) };
};

export const serviceU = {
    showAllUsers,
    searchUserById,
    addUser,
    updateUser,
    deleteUser
};
