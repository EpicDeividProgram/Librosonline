// --------------------------------------------------------
// ----- MAIN INDEX --- (IMPORT APP FROM ROUTER) -----
// --------------------------------------------------------
import { app } from "./API/Router.js";
// PORT = 4001
const PORT = 4001;
// *** app start listening in: ***
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost: + ${PORT}`)
})

//!! (Duda/Nota): app.listen definido junto al port aqui al ser el Router el APP
//y el Index el verdadero MAIN, cierto?