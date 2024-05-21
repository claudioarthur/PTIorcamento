
const { Sequelize } = require( "sequelize" );
const connection = new Sequelize( 'finance' , 'root' ,'AdServer2019',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;