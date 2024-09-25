// --------------------------------------------------------
// ----- BOOKPOST --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';

export const BookPost = sequelize.define('bookpost', 
{
    codeP: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idA: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idU: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postDescription: {
        type: Sequelize.STRING,
        allowNull: false
    }
});