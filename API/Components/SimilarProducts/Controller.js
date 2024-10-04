// --------------------------------------------------------
// --------------- SIMILAR PRODUCTS CONTROLLER -------------------
// --------------------------------------------------------

// ---*** IMPORTACIONES ***---
import { serviceSim } from './Service.js';
// === HTTP VERBS & ASYNC FUNCS ===
//GET SIM PRODS. (GET)
const getAllSimProd = async(req, res)=>{
    res.status(200).json(await serviceSim.showAllSimProd())
}
//

//SEARCH SIM PROD. (GET)
const searchSimProd = async (req, res)=>{
    res.status(200).json(await serviceSim.searchByCode(req.params.codeS))
}

// ADD SIM PROD. (POST)
const addSimProd = async (req, res) => {
    const { userId, name, description } = req.body;

    // Validación de campos vacíos
    if (!userId || !name || !description) {
        return res.status(400).json({ message: 'All fields (userId, name, description) are required' });
    }

    try {
        // Validar si la clave foránea (userId) existe
        const validForeignKey = await serviceSim.checkForeignKey(userId);
        if (!validForeignKey) {
            return res.status(400).json({ message: 'Invalid foreign key: userId does not exist' });
        }

        // Verificar si ya existe un producto similar con el mismo nombre
        const duplicateSimProd = await serviceSim.checkDuplicateSimProd(name);
        if (duplicateSimProd) {
            return res.status(400).json({ message: 'A similar product with the same name already exists' });
        }

        // Agregar el producto similar si todo está bien
        const newSimProd = await serviceSim.addProdSim(req.body);
        res.status(201).json(newSimProd);
    } catch (error) {
        res.status(500).json({ message: 'Error adding similar product', error: error.message });
    }
};

// UPDATE SIM PROD. (PUT)
const updateSimProd = async (req, res) => {
    const { userId, name, description } = req.body;

    // Validacion de campos vacios
    if (!userId || !name || !description) {
        return res.status(400).json({ message: 'All fields (userId, name, description) are required' });
    }

    try {
        // Actualizar el producto similar si todo está bien
        const updatedSimProd = await serviceSim.updateProdSim(req.params.codeS, req.body);
        res.status(200).json(updatedSimProd);
    } catch (error) {
        res.status(500).json({ message: 'Error updating similar product', error: error.message });
    }
};

//DELETE TYPE (DELETE)
//PROBANDO CONEXION CON GIT
const deleteSimProd = async (req, res) =>{
    res.status(200).json(await serviceSim.deleteProdSim(req.params.codeS));
}

//FILTER SIM PROD BY NAME (GET)
const filterProdByName = async (req, res)=>{
    res.status(200).json(await serviceSim.filterByName(req.params.name))
}

//export this controller
export const controllerS= {
    getAllSimProd,
    addSimProd,
    searchSimProd,
    updateSimProd,
    deleteSimProd,
    filterProdByName
}
// ----------------------=================