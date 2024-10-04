// --------------------------------------------------------
// ----- BookPost&Type ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';
import { BookPost } from '../BookPost/Model.js';
import { BookType } from '../BookType/Model.js';

export const BookPostType = sequelize.define('bookposttype', {
    codeT: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    codeBook: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: BookPost, // Referencia al modelo BookPost
            key: 'codeP'
        }
    },
    codeType: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: BookType, // Referencia al modelo BookType
            key: 'codeT'
        }
    }
});

// Establecer relaciones (1 a 1)
BookPost.hasOne(BookPostType, { foreignKey: 'codeBook' });
BookPostType.belongsTo(BookPost, { foreignKey: 'codeBook' });

BookType.hasOne(BookPostType, { foreignKey: 'codeType' });
BookPostType.belongsTo(BookType, { foreignKey: 'codeType' });
