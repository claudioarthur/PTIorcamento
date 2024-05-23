const { Sequelize } = require("sequelize");
const connection = require("./database");

const Orcamento = connection.define('perguntas',{
    id_conta:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Pergunta.sync({force: false}).then(() => {});

module.exports = Orcamento;