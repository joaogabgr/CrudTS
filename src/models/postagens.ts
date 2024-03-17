import { DataTypes, Model, Sequelize } from "sequelize";
import { sequelize } from "../config/database";
import { Usuarios } from "./usuario";

interface PostagemInterface extends Model {
    id: number;
    titulo: string;
    mensagem: string;
    usuarioID: number;
}

const Postagens = sequelize.define<PostagemInterface>('postagens', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mensagem: {
        type: DataTypes.TEXT
    },
    usuarioID: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

Postagens.belongsTo(Usuarios, { foreignKey: 'usuarioID', as: 'usuario' });

export { Postagens };
