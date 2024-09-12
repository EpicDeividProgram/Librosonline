// --------------------------------------------------------
// --------------- ROUTER MODULE --- (APP) -------------------
// --------------------------------------------------------
// ---*** IMPORTACIONES ***---
import express from 'express';
import bodyParser from 'body-parser';
import {routerTypeUser} from './Components/TypeOfUser/Route.js';
import {sequelize} from './Configuration/connection.js';
// PORT =
const PORT = 4001;
const appX = express();
// llamamos el bodyparser como es de constumbre al usar express
appX.use(bodyParser.urlencoded({
    extended: true
}))
appX.use(bodyParser.json())
appX.use(express.json());

// comenzamos a definir los paths y urls a usar
/*
app.use("/product", routerTypeUser)
//
app.get('/', (req, res) => {
    res.status(200).json({message: `Access to localhost in: ${PORT} /products` })
})

*/
//este try catch que funciona como una especie de middleware
//a fin de asegurar la conexion con mysql
try
{
    await sequelize.sync();
    console.log('DB cobbection established succesfully!');
}
catch (error)
{
    console.log('ERR0R! Couldnt connect yet with the DB!', error);
}

//
export let app = appX.listen(PORT, (_) => {
    console.log("Server listening on http://localhost:" + PORT)
})