// --------------------------------------------------------
// ----- MAIN INDEX --- (IMPORT APP FROM ROUTER) -----
// --------------------------------------------------------
import { appX } from "./API/Router.js"; // Importar la app configurada

const PORT = 4001;

// Arranque del servidor
appX.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
