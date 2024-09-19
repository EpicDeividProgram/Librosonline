// --------------------------------------------------------
// --------------- ROUTER MODULE --- (APP) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './Configuration/connection.js';
import { authorRouter } from './Components/Author/routes.js';
import { categoryRouter } from './Components/Category/routes.js';
import { questionsRouter } from './Components/Questions/routes.js';
import {typeUserRouter} from './Components/TypeOfUser/Route.js';
import { userRouter } from './Components/User/Routes.js';
import { bookPostTypeRouter } from './Components/BookPost&Type/routes.js';
import { categoryPerBookRouter } from './Components/CategoryPerBook/routes.js';

// Creamos la aplicación de Express
const app = express();

// --- CONFIGURACIÓN DE MIDDLEWARES ---
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// --- RUTAS ---
app.use("/author", authorRouter);
app.use("/category", categoryRouter);
app.use("/questions", questionsRouter);
app.use("/typeofUser", typeUserRouter);
app.use("/user", userRouter);
app.use("/bookposttype", bookPostTypeRouter);
app.use("/categoryPerBook", categoryPerBookRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: `Welcome to the API` });
});

// --- CONEXIÓN A LA BASE DE DATOS ---
const startDBConnection = async () => {
    try {
        await sequelize.sync();
        console.log('Connected with the DB successfully!');
    } catch (error) {
        console.error('Sorry, couldn\'t connect to the DB!', error);
    }
};

// Ejecutar la conexión a la base de datos
startDBConnection();

// Exportar la app configurada
export const appX = app;
