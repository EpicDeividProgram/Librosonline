// --------------------------------------------------------
// ----- SIMILAR PRODUCTS --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';

export const SimilarProduct = sequelize.define('similarProduct', 
    {
        codeS: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true

        },
        userId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);