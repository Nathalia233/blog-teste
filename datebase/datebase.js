const Sequelize = require ("sequelize");

const connection = new Sequelize('blogteste','root','password',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;