// --------------------------------------------------------
// ----- Category ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Category = sequelize.define('categories', 
    {
        codeC: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true           
        },
        nameC: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);