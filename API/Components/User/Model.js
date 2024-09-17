// --------------------------------------------------------
// ----- USER MODEL --- (MODEL) -----
// --------------------------------------------------------
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';
import { TypeOfUser } from '../TypeOfUser/Model.js'; // Importar el modelo TypeOfUser para la FK

export const User = sequelize.define('user', 
{
    idU: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
            model: TypeOfUser, // Referencia a TypeOfUser
            key: 'typeOfUser'
        }
    }
});
