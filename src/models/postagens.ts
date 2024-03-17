import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";
import { Usuarios } from "./usuario";

export const Postagens = sequelize.define('postagens', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensagem: {
        type:DataTypes.TEXT
    }
});

Postagens.belongsTo(Usuarios);

// Postagens.sync({ force: true })