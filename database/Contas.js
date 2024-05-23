const { Sequelize } = require("sequelize");
const connection = require("./database");

const Contas = connection.define("contas", {
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Contas.sync({force: false});

module.exports = Contas;