// --------------------------------------------------------
// ----- BOOK TYPE ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';

export const BookType = sequelize.define('bookType', 
    {
        codeT: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true

        },
        descriptionType: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }
);