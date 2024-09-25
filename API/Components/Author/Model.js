// --------------------------------------------------------
// ----- Author ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Author = sequelize.define('authors', 
{
    idA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true

    },
    fullname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    biography: {
        type: Sequelize.STRING,
        allowNull: false
    },
    detailsAbout: {
        type: Sequelize.STRING,
        allowNull: false
    }
});