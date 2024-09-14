// --------------------------------------------------------
// --------------- ROUTER MODULE --- (APP) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express';
import bodyParser from 'body-parser';
import {sequelize} from './Configuration/connection.js';
// ENTITIES
import {typeUserRouter} from './Components/TypeOfUser/Route.js';
import {similarRouter} from './Components/SimilarProducts/Route.js';
import {bookTypeRouter} from './Components/BookType/Route.js';

// Creamos la aplicación de Express
const appX = express();
// --- CONFIGURACIÓN DE MIDDLEWARES ---
appX.use(bodyParser.urlencoded({ extended: true }))
appX.use(bodyParser.json())
appX.use(express.json());

// --- URLS & QUERIES ---
//--
appX.use("/typeofUser", typeUserRouter)
appX.use("/similarProduct", similarRouter)
appX.use("/bookType", bookTypeRouter)
//--


//
appX.get('/', (req, res) => {
    res.status(200).json({ message: `Welcome to the API` });
});


// TRY AWAIT FOR THE --- MYSQL WORKBENCH CONNECTION WITH THE DB ----
//
const connectDB = async () => {
    try{
        await sequelize.sync();
        console.log('DB cobbection established succesfully!');
    }
    catch (error){
        console.log('ERR0R! Couldnt connect yet with the DB!', error);
    }
}
// 
connectDB()
//
export let app = appX