// --------------------------------------------------------
// ----- SERIE ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Serie = sequelize.define('serie', 
{
    codeR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    codeP: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codeS: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    seriesName: {
        type: Sequelize.STRING,
        allowNull: false
    }
}
);