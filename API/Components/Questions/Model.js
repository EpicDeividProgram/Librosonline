// --------------------------------------------------------
// ----- Questions ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Questions = sequelize.define('questions', 
    {
        codeQ: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true

        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

//MODIFICAR ESTE MODELO!! FALTA LA RELACION CON USER Y EL FK!!!