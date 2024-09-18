// --------------------------------------------------------
// --------------- USER REPOSITORY -------------------
// --------------------------------------------------------
import { User } from './Model.js';

// ** Show all users
const showAllUsers = async () => {
    return await User.findAll();
};

// ** Search user by ID
const findUserById = async (idU) => {
    return await User.findOne({ where: { idU: idU } });
};

// ** Add new user
const addUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

// ** Update user by ID
const updateUser = async (idU, userDetails) => {
    const user = await User.findOne({ where: { idU: idU } });
    user.name = userDetails.name;
    user.lastName = userDetails.lastName;
    user.birthDate = userDetails.birthDate;
    user.address = userDetails.address;
    user.email = userDetails.email;
    user.type = userDetails.type;
    await user.save();
    return user;
};

// ** Delete user by ID
const deleteUser = async (idU) => {
    const user = await User.findOne({ where: { idU: idU } });
    await user.destroy();
    return user;
};

export const reposU = {
    showAllUsers,
    findUserById,
    addUser,
    updateUser,
    deleteUser
};
