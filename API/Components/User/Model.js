// --------------------------------------------------------
// ----- USER --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';
import { TypeOfUser } from '../TypeOfUser/Model.js';


export const User = sequelize.define('user', {
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
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: TypeOfUser,
            key: 'username' // Clave primaria en TypeOfUser
        }
    }
});

// Importacion dinamica para evitar problemas de referencia circular
(async () => {
    const { TypeOfUser } = await import('../TypeOfUser/Model.js');
    const { Questions } = await import('../Questions/model.js');

    // Relación de User a TypeOfUser (N:1)
    User.belongsTo(TypeOfUser, {
        foreignKey: 'type', // La clave foránea en User
        targetKey: 'username', // La clave primaria en TypeOfUser
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    // Relación de TypeOfUser a User (1:N)
    TypeOfUser.hasMany(User, {
        foreignKey: 'type', // La clave foranea en User
        sourceKey: 'username' // La clave primaria en TypeOfUser
    });

    // Relación de User a Questions (1:N)
    User.hasMany(Questions, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
})();
