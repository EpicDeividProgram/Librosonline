// --------------------------------------------------------
// --------------- ROUTER MODULE --- (APP) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express';
import bodyParser from 'body-parser';
import {sequelize} from './Configuration/connection.js';
// ENTITIES
import {TypeOfUser} from './Components/TypeOfUser/Model.js'
import {User} from './Components/User/Model.js'
// ENTITIES ROUTERS
import {typeUserRouter} from './Components/TypeOfUser/Route.js';
import {typeBookRouter} from './Components/BookType/Route.js';
import {similarProdrouter} from './Components/SimilarProducts/Route.js';
import {userRouter} from './Components/User/Route.js';

// Creamos la aplicación de Express
const appX = express();
// --- CONFIGURACIÓN DE MIDDLEWARES ---
appX.use(bodyParser.urlencoded({ extended: true }))
appX.use(bodyParser.json())
appX.use(express.json());

// --- URLS & QUERIES ---
//--
appX.use("/typeofUser", typeUserRouter)
appX.use("/bookType", typeBookRouter)
appX.use("/similarProduct", similarProdrouter)
appX.use("/user", userRouter)
//-

//
appX.get('/', (req, res) => {
    res.status(200).json({ message: `Welcome to the API` });
});

// TRY AWAIT FOR THE --- MYSQL WORKBENCH CONNECTION WITH THE DB ----
//
const connectDB = async () => {
    try{
        await sequelize.sync();

        TypeOfUser.hasMany(User, { foreignKey: 'typeOfUser' }); 
        User.belongsTo(TypeOfUser, { foreignKey: 'typeOfUser' });

        console.log('DB connection established succesfully!');
    }
    catch (error){
        console.log('ERR0R! Couldnt connect yet with the DB!', error);
    }
}
// 
connectDB()
//
export let app = appX