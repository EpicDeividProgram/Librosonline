// --- IMPORTACIONES ---
import express from 'express';
import bodyParser from 'body-parser';
import { sequelize } from './Configuration/connection.js'; // Conexión a la base de datos
import { authorRouter } from './Components/Author/routes.js'; // Ruta del Author (puedes agregar más rutas conforme crezcas)
import { categoryRouter } from './Components/Category/routes.js'; // Ruta de Category (puedes agregar más rutas conforme crezcas)
import { questionsRouter } from './Components/Questions/routes.js'; // Ruta de Questions (puedes agregar más rutas conforme crezcas)

// Creamos una instancia de la aplicación de Express
const app = express();
const PORT = 4001; // Puerto que usaremos

// --- CONFIGURACIÓN DE MIDDLEWARES ---
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

// --- RUTAS ---
app.use("/author", authorRouter); // Usar el router para las rutas de Author (puedes agregar otras rutas)
app.use("/category", categoryRouter); // Usar el router para las rutas de Category (puedes agregar otras rutas)
app.use("/questions", questionsRouter); // Usar el router para las rutas de Questions (puedes agregar otras rutas)

// Ruta raíz para verificar que el servidor esté funcionando
app.get('/', (req, res) => {
    res.status(200).json({ message: `Access to localhost in: ${PORT} /author` });
});

// --- CONEXIÓN A LA BASE DE DATOS Y ARRANQUE DEL SERVIDOR ---
const startServer = async () => {
    try {
        await sequelize.sync();
        console.log('Connected with the DB successfully!');
        app.listen(PORT, () => {
            console.log(`Server listening on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Sorry, couldn\'t connect to the DB!', error);
    }
};

// Iniciar el servidor
startServer();
