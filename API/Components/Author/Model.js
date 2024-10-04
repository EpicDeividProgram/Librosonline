// --------------------------------------------------------
// ----- Author ---- (MODEL) -----
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Author = sequelize.define('authors', 
    {
        idA: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true,
            validate: {
                notEmpty: {
                    msg: "ID cannot be empty"
                }
            }        
        },
        fullname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        biography: {
            type: Sequelize.STRING,
            allowNull: false
        },
        detailsAbout: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);