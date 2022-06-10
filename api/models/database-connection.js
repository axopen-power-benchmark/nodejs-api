const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false,
    define: {
        //prevent sequelize from pluralizing table names
        freezeTableName: true
    }
});

function authenticate() {
    return sequelize
        .authenticate()
        .then(() => sequelize.sync({force: false}))
        .catch(err => {
            console.error('Unable to connect to the database:', err);
            throw err;
        });
}

module.exports = {sequelize: sequelize, authenticate: authenticate};
