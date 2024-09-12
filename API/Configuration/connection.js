// --------------------------------------------------------
// ----- CONNECTION MODULE --- (DB CONFIG CONNECTION) -----
// --------------------------------------------------------
import {Sequelize} from 'sequelize';
export const sequelize = new Sequelize('librosonline_db', 'root', 'GracoSoft#00', {
    dialect: 'mysql',
    host: 'localhost'
});
