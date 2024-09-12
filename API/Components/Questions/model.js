import { sequelize } from '../Configuration/connection.js';
import { Sequelize } from 'sequelize';

export const Questions = sequelize.define('questions', 
    {
        codeQ: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true

        },
        description: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);