const {DataTypes} = require('sequelize');
const {sequelize} = require('./database-connection');
const {Ouvrier} = require("./ouvrier");
const {Chef} = require("./chef.model");
const {Journal} = require("./journal");
const {User} = require("./user.model");

const Chantier = sequelize.define('chantier', {
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE'
    },
    description: {
        type: DataTypes.STRING(255)
    },
    city: {
        type: DataTypes.STRING(255)
    },
    city_cp: {
        type: DataTypes.INTEGER
    },
    date_debut: {
        type: DataTypes.DATE
    },
    date_fin: {
        type: DataTypes.DATE
    },
    status: {
        type: DataTypes.STRING(255)
    },
    lien_sharepoint: {
        type: DataTypes.STRING(255)
    },
    lien_files: {
        type: DataTypes.STRING(255)
    },
    lien_gearth: {
        type: DataTypes.STRING(255)
    },
    prix_moyen_moe_jour: {
        type: DataTypes.INTEGER
    },
    prix_moyen_moe_nuit: {
        type: DataTypes.INTEGER
    },
    prix_moyen_materiel: {
        type: DataTypes.INTEGER
    },
    journal_pointage_erp: {
        type: DataTypes.STRING(255)
    },
}, {
    timestamps: false
});

Chantier.hasMany(Ouvrier, {foreignKey: 'numero_chantier'});
Chantier.hasMany(Chef, {foreignKey: 'numero_chantier'});
Chantier.hasMany(Journal, {foreignKey: 'numero_chantier'});
Chantier.hasMany(User, {foreignKey: 'numero_latest_chantier'});

module.exports = {Chantier: Chantier};
