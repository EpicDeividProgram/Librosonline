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
    typeOfUser: {
        type: Sequelize.STRING,
        allowNull: false
    }
});