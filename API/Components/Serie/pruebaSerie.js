// --------------------------------------------------------
// ----- SERIE ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Serie = sequelize.define('serie', 
{
    codeR: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    codeP: {
        type: Sequelize.STRING,
        allowNull: false
    },
    codeS: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    seriesName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


// Importacion dinamica para evitar problemas de referencia circular
(async () => {
    const { BookPost } = await import('../BookPost/Model.js');
    const { SimilarProduct } = await import('../SimilarProducts/Model.js');

    Serie.belongsTo(BookPost, {
        foreignKey: 'codeP', // La clave foránea en Bookpost
        targetKey: 'codeP', // La clave primaria en Author
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    Serie.belongsTo(SimilarProduct, {
        foreignKey: 'codeS', // La clave foránea en Bookpost
        targetKey: 'codeS', // La clave primaria en User
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });

    // Relación de Author a BookPost (1:N)
    BookPost.hasOne(Serie, {
        foreignKey: 'codeP', // La clave foranea en BookPost
        sourceKey: 'codeP' // La clave primaria en Author
    });

    
    // Relación de User a BookPost (1:N)
    SimilarProduct.hasOne(Serie, {
        foreignKey: 'codeS', // La clave foranea en BookPost
        sourceKey: 'codeS' // La clave primaria en User
    });

    
})();