import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';
import { TypeOfUser } from '../TypeOfUser/Model.js'; // Importar el modelo TypeOfUser para la FK

// Definimos el modelo User
export const User = sequelize.define('user', {
    idU: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: TypeOfUser, // Referencia a TypeOfUser
            key: 'typeOfUser'
        }
    }
});

// Importación dinamica para evitar el problema de referencia circular
(async () => {
    const { Questions } = await import('../Questions/model.js');

    // Relacion de User a Questions (1:N)
    User.hasMany(Questions, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    });
})();


/*nota:
User.hasMany(Questions): Definimos la relacion de uno a muchos entre User y Questions. Un usuario puede tener muchas preguntas

foreignKey: 'userId': Especificamos que el campo userId en la tabla Questions es la llave foranea que establece la relacion con User

onDelete: 'CASCADE' y onUpdate: 'CASCADE': Igual que antes, estas opciones aseguran que si un usuario es eliminado o actualizado
 sus preguntas se eliminan o actualizan automáticamente. 
*/

/*NOTA IMPORTANTE:

tuve muchos problema para la relacion , el problema es un ciclo de dependencias entre los modelos User y Questions
 lo que esta causando el error de referencia circular. 
 Para resolver esto, tuve que usar una tecnica llamada importacion dinamica en lugar de importar directamente al principio de los archivos.

Uso de Importacion Dinamica
En lugar de importar el modelo Questions directamente en el archivo User/Model.js, uso una importacion dinamica en el momento en que realmente
necesitas acceder al modelo.
*/

/*otra nota:
Un usuario (User) puede tener muchas preguntas (Questions): lo especifico en el modelo User con la linea User.hasMany(Questions, 
{ ... }). Esto establece que un usuario puede estar asociado con multiples preguntas.

Cada pregunta (Questions) esta asociada a un solo usuario (User): 
lo especifico en el modelo Questions con la linea Questions.belongsTo(User, { ... }). 
Esto establece que cada pregunta esta vinculada a un unico usuario.
*/