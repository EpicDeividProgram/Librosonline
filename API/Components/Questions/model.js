import { sequelize } from '../../Configuration/connection.js';
import { Sequelize } from 'sequelize';
import { User } from '../User/Model.js';

// Define el modelo Questions
export const Questions = sequelize.define('questions', {
    codeQ: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {  // Agregamos el campo userId como FK
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: User,  // Referencia al modelo User
            key: 'idU'
        },
        onDelete: 'CASCADE',  // Si se elimina un usuario, tambien se eliminan sus preguntas
        onUpdate: 'CASCADE'   // Si se actualiza el usuario, tambien se actualiza la relación
    }
});

// Relación de Question a User (N:1)
Questions.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
});


/*Nota: 
Campo userId: Este campo es la llave foranea en la tabla Questions, que vincula cada pregunta con un usuario

type: Sequelize.STRING: El tipo de dato de esta llave foranea es STRING porque debe coincidir con el tipo de la llave primaria idU en el modelo User

allowNull: false: Significa que no se permite que este campo sea nulo osea que cada pregunta debe estar asociada a un usuario

references: { model: User, key: 'idU' }: Establece que userId es una referencia a la tabla User, especificamente al campo idU

y claro esto es porsi se se elimina un user 

onDelete: 'CASCADE': Si se elimina un usuario, se eliminaran automaticamente todas las preguntas asociadas a ese usuario
onUpdate: 'CASCADE': Si el valor de la llave primaria en el modelo User (en este caso idU) se actualiza, la llave foránea userId en Questions 
tambien se actualizara automaticamente para mantener la integridad referencial.

Questions.belongsTo(User): Establece la relacion entre Questions y User lo cual indica que cada pregunta pertenece a un usuario.

foreignKey: 'userId': Define que el campo userId en la tabla Questions es la llave foranea que conecta con el campo idU en la tabla User

onDelete: 'CASCADE' y onUpdate: 'CASCADE': Estas configuraciones aseguran que si un usuario es eliminado o su idU es actualizado
 las preguntas relacionadas se eliminan o actualizan respectivamente
*/