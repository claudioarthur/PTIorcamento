const { Sequelize } = require("sequelize");
const connection = require("./database");

const Movimento = connection.define('movimentos',{
    id_conta:{
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.FLOAT,
        allowNull: false
    }
});

Movimento.sync({force: false}).then(() => {});

module.exports = Movimento;