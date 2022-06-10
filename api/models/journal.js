const {DataTypes} = require('sequelize');
const {sequelize} = require('./database-connection');
const {Chantier} = require("./chantier.model");
const {Depense} = require("./depense");

const Journal = sequelize.define('journal_chantier', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE'
    },
    numero_chantier: {
        type: DataTypes.INTEGER,
        references: {
            model: Chantier,
            key: 'numero'
        }
    },
    date: {
        type: DataTypes.DATE,
    },
    temperature_matin: {
        type: DataTypes.INTEGER,
    },
    temperature_soir: {
        type: DataTypes.INTEGER,
    },
    moe_generated: {
        type: DataTypes.BOOLEAN,
    },
    materiel_generated: {
        type: DataTypes.BOOLEAN,
    },
    note: {
        type: DataTypes.STRING(10000),
    },
}, {
    timestamps: false
});

Journal.hasMany(Depense, {foreignKey: 'id_journal_chantier'})

module.exports = {Journal: Journal};
