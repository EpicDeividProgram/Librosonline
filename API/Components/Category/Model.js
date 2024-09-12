// --------------------------------------------------------
// ----- Category ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Category = sequelize.define('category', 
    {
        codeC: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
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