// --------------------------------------------------------
// ----- TYPE OF USER --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

// Definimos el modelo TypeOfUser
export const TypeOfUser = sequelize.define('typeOfUser', {
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    typeOfUser: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Restriccion UNIQUE
    }
});

// Importacion dinamica para evitar problemas de referencia circular
(async () => {
    const { User } = await import('../User/Model.js');

    // Relacion de TypeOfUser a User (1:N)
    TypeOfUser.hasMany(User, {
        foreignKey: 'type', // La clave foranea en User
        sourceKey: 'username' // La clave primaria en TypeOfUser
    });
})();