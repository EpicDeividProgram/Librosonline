// --------------------------------------------------------
// ----- CategoryPerBook ---- (MODEL) -----
// --------------------------------------------------------
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';
import { Category } from '../Category/model.js'; // Importamos Category
import { BookPost } from '../BookPost/Model.js'; // Importamos BookPost

export const CategoryPerBook = sequelize.define('categoryPerBook', {
    codeMiddleC: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    codeCategory: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Category, // Modelo de Category
            key: 'codeC' // Clave primaria de Category
        }
    },
    codeBook: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: BookPost, // Modelo de BookPost
            key: 'codeP' // Clave primaria de BookPost
        }
    }
});

// Crearmos las asociaciones (relaciones) uno a uno
Category.hasOne(CategoryPerBook, { foreignKey: 'codeCategory' });
BookPost.hasOne(CategoryPerBook, { foreignKey: 'codeBook' });
CategoryPerBook.belongsTo(Category, { foreignKey: 'codeCategory' });
CategoryPerBook.belongsTo(BookPost, { foreignKey: 'codeBook' });
