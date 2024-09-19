// --------------------------------------------------------
// ----- CategoryPerBook ---- (MODEL) -----
// --------------------------------------------------------
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const CategoryPerBook = sequelize.define('categoryPerBook', {
    codeMiddleC: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    codeBook: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codeCategory: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
