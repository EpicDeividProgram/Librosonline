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
