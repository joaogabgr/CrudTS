import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

// Usuarios.sync({ force: true })