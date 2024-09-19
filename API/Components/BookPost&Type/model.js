// --------------------------------------------------------
// ----- BookPost&Type ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const BookPostType = sequelize.define('bookposttype', 
    {
        codeT: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        codeBook: {
            type: Sequelize.STRING,
            allowNull: false
        },
        codeType: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);
