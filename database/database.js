
const { Sequelize } = require( "sequelize" );
const connection = new Sequelize( 'finance' , 'root' ,'',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;