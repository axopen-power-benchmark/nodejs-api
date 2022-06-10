const {DataTypes} = require('sequelize');
const {sequelize} = require('./database-connection');
const {Chantier} = require("./chantier.model");

const User = sequelize.define('canopee_user', {
    matricule: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE'
    },
    fullname: {
        type: DataTypes.STRING(255),
    },
    societe: {
        type: DataTypes.STRING(255),
    },
    email: {
        type: DataTypes.STRING(255),
    },
    job_title: {
        type: DataTypes.STRING(255),
    },
    resource_group_no: {
        type: DataTypes.STRING(255),
    },
    travel_code: {
        type: DataTypes.STRING(255),
    },
    numero_latest_chantier: {
        type: DataTypes.STRING(255),
        references: {
            model: Chantier,
            key: 'numero'
        }
    },
    journal_pointage_erp: {
        type: DataTypes.STRING(255),
    },
}, {
    timestamps: false
});


module.exports = {User: User};
