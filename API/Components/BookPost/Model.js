// --------------------------------------------------------
// ----- BOOKPOST --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';
//
import { Author } from '../Author/Model.js';
import { User } from '../User/Model.js';

export const BookPost = sequelize.define('bookpost', 
{
    codeP: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idA: {
        type: Sequelize.INTEGER,
        allowNull: false,
        /*references: {
            model: Author,
            key: 'idA' // Clave primaria en Author
        }*/
    },
    idU: {
        type: Sequelize.STRING,
        allowNull: false,
        /*references: {
            model: User,
            key: 'idU' // Clave primaria en User
        }*/
    },
    postDescription: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Importacion dinamica para evitar problemas de referencia circular
(async () => {
    const { Author } = await import('../Author/Model.js');
    //const { User } = await import('../User/Model.js');

    BookPost.belongsTo(Author, {
        foreignKey: 'idA', // La clave foránea en Bookpost
        targetKey: 'idA', // La clave primaria en Author
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    BookPost.belongsTo(User, {
        foreignKey: 'idU', // La clave foránea en Bookpost
        targetKey: 'idU', // La clave primaria en User
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    // Relación de Author a BookPost (1:N)
    Author.hasMany(BookPost, {
        foreignKey: 'idA', // La clave foranea en BookPost
        sourceKey: 'idA' // La clave primaria en Author
    });

    
    // Relación de User a BookPost (1:N)
    User.hasMany(BookPost, {
        foreignKey: 'idU', // La clave foranea en BookPost
        sourceKey: 'idU' // La clave primaria en User
    });

    
})();