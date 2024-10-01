import jwt from 'jsonwebtoken';
import { User } from '../User/Model.js'; // Importar el modelo de User
import { TypeOfUser } from '../TypeOfUser/Model.js'; // Importar el modelo de TypeOfUser
import bcrypt from 'bcryptjs';


// Clave secreta para firmar los tokens
const secretKey = 'your_secret_key';

// Controlador para el inicio de sesión
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Buscar usuario por email
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verificar la contraseña
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Obtener el tipo de usuario
        const typeOfUser = await TypeOfUser.findOne({ where: { username: user.type } });

        // Generar token
        const token = jwt.sign({ userId: user.id, role: typeOfUser.username }, secretKey, { expiresIn: '1h' });

        // Devolver token al cliente
        return res.status(200).json({ token });
    } catch (error) {
        return res.status(500).json({ message: 'Server error', error });
    }
};

// Controlador para el cierre de sesión (opcional, basado en el lado del cliente)
export const logout = (req, res) => {
    return res.status(200).json({ message: 'Logged out successfully' });
};
