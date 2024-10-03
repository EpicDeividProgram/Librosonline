// --------------------------------------------------------
// ----- CONNECTION MODULE --- (DB CONFIG CONNECTION) -----
// --------------------------------------------------------
import {Sequelize} from 'sequelize';
//
export const sequelize = new Sequelize('librosonline_db', 'root', 'Hormiga123', {
    dialect: 'mysql',
    host: 'localhost'
});

//new thingy