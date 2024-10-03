import jwt from 'jsonwebtoken';

const secretKey = 'your_secret_key';

// Middleware para validar el token y proteger rutas
export const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        req.user = decoded; 
        next();
    });
};

// Middleware para verificar si el usuario es 'publisher'
export const isPublisher = (req, res, next) => {
    if (req.user.role !== 'publisher') {
        return res.status(403).json({ message: 'Access denied. Only publishers can access this resource.' });
    }
    next();
};


