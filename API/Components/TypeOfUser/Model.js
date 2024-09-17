// --------------------------------------------------------
// ----- TYPE OF USER --- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import {sequelize} from '../../Configuration/connection.js';
import {Sequelize} from 'sequelize';

export const TypeOfUser = sequelize.define('typeOfUser', 
{
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true

    },
    typeOfUser: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // restriccion UNIQUE
        /*------------------------------------------------*/
        //el campo typeOfUser que estamos utilizando como referencia de la clave foranea (type) 
        //no tiene una restriccion de clave unica (UNIQUE). Esto es necesario para que MySQL 
        //permita establecer una clave foranea.
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
      
});