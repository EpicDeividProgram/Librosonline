// --------------------------------------------------------
// ----- SIMILAR PRODUCTS --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';
//importamos la entity a la que se hará ref en el FK
import { User } from '../User/Model.js';

export const SimilarProduct = sequelize.define('similarProduct', 
{
    codeS: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true

    },
    userId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'idU' // Clave primaria en User
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

// Importacion dinamica para evitar problemas de referencia circular
(async () => {
    const { User } = await import('../User/Model.js');

    // Relación de TypeOfUser a User (1:N)
    User.hasMany(SimilarProduct, {
        foreignKey: 'userId', // La clave foranea en User
        sourceKey: 'idU' // La clave primaria en TypeOfUser
    });
    //Duda: por lo menos aqui es de 1:M pq user has many sim prods
    //y sim prods belong to 1 User, pero User no tiene FKde sim prod
    //so, hace falta esta segunda tambien? o no?
})();