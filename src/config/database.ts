import { Sequelize } from "sequelize";
export const sequelize = new Sequelize('teste1', 'root', 'Nc321654987', {
    host: 'localhost',
    dialect: 'mysql'
});

export const ConectarBanco = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conectado com sucesso');
        return sequelize;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

ConectarBanco()