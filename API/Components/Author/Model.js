import { sequelize } from '../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Author = sequelize.define('author', 
    {
        idA: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true

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