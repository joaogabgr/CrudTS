import { DataTypes, Model, Sequelize, ModelCtor } from "sequelize";
import { sequelize } from "../config/database";

export interface UsuariosInterface extends Model {
    id: number;
    nome: string;
    email: string;
    idade: number;
    senha: string;
}

const Usuarios = sequelize.define<UsuariosInterface>('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export { Usuarios };
