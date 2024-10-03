// --------------------------------------------------------
// --------------- ROUTER MODULE --- (APP) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './Configuration/connection.js';
import { authorRouter } from './Components/Author/Route.js';
import { categoryRouter } from './Components/Category/Route.js';
import { questionsRouter } from './Components/Questions/Route.js';
import {typeUserRouter} from './Components/TypeOfUser/Route.js';
import { userRouter } from './Components/User/Routes.js';
import { bookPostTypeRouter } from './Components/BookPost&Type/Route.js';
import { categoryPerBookRouter } from './Components/CategoryPerBook/Route.js';
import {typeBookRouter} from './Components/BookType/Route.js';
import {postBookRouter} from './Components/BookPost/Route.js';
import { authRouter } from './Components/Auth/auth.routes.js';

// Creamos la aplicación de Express
const app = express();

// --- CONFIGURACIÓN DE MIDDLEWARES ---
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// --- RUTAS ---
app.use("/author", authorRouter);
app.use("/category", categoryRouter);
app.use("/typeofUser", typeUserRouter);
app.use("/questions", questionsRouter);
app.use("/bookposttype", bookPostTypeRouter);
app.use("/categoryPerBook", categoryPerBookRouter);
app.use("/user", userRouter);
app.use("/bookType", typeBookRouter)
app.use("/postBook", postBookRouter)
// Añadir las rutas de autenticación
app.use('/auth', authRouter);


app.get('/', (req, res) => {
    res.status(200).json({ message: `Welcome to the API` });
});

// --- CONEXIÓN A LA BASE DE DATOS ---
const startDBConnection = async () => {
    try {
        //await sequelize.sync({ alter: true });
        await sequelize.sync({ force: true }); // Crea todas las tablas
        //await sequelize.sync();
        console.log('Connected with the DB successfully!');
    } catch (error) {
        console.error('Sorry, couldn\'t connect to the DB!', error);
    }
};

// Ejecutar la conexión a la base de datos
startDBConnection();

// Exportar la app configurada
export const appX = app;
