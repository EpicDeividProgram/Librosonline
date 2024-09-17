// --------------------------------------------------------
// --------------- USER REPOSITORY -------------------
// --------------------------------------------------------
import { User } from './Model.js';

// ** Mostrar todos los usuarios
const showAllUsers = async () => {
    return await User.findAll();
};

// ** Buscar usuario por ID
const findUserById = async (idU) => {
    return await User.findOne({ where: { idU: idU } });
};

// ** Añadir nuevo usuario
const addUser = async (user) => {
    const newUser = await User.create(user);
    return newUser;
};

// ** Actualizar usuario por ID
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

// ** Eliminar usuario por ID
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
