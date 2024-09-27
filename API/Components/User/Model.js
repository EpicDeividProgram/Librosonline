// --------------------------------------------------------
// ----- USER --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';

export const User = sequelize.define('user', 
{
    idU: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true

    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        /*references: {
            model: TypeOfUser,
            key: 'username' // Clave primaria en TypeOfUser
        }*/
    }
});

// Importacion dinamica para evitar problemas de referencia circular
(async () => {
    const { TypeOfUser } = await import('../TypeOfUser/Model.js');

    // Relación de User a TypeOfUser (N:1)
    User.belongsTo(TypeOfUser, {
        foreignKey: 'username', // La clave foránea en User
        targetKey: 'username', // La clave primaria en TypeOfUser
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    // Relación de TypeOfUser a User (1:N)
    TypeOfUser.hasMany(User, {
        foreignKey: 'username', // La clave foranea en User
        sourceKey: 'username' // La clave primaria en TypeOfUser
    });

})();