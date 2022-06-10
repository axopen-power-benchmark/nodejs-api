const {DataTypes} = require('sequelize');
const {sequelize} = require('./database-connection');
const {Journal} = require("./journal");
const {Ouvrier} = require("./ouvrier");

const Depense = sequelize.define('depense_main_doeuvre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE'
    },
    id_journal_chantier: {
        type: DataTypes.INTEGER,
        references: {
            model: Journal,
            key: 'id'
        }
    },
    id_ouvrier_chantier: {
        type: DataTypes.INTEGER,
        references: {
            model: Ouvrier,
            key: 'id'
        }
    },
    quart_dheures_jour: {
        type: DataTypes.INTEGER,
    },
    quart_dheures_nuit: {
        type: DataTypes.INTEGER,
    },
    voiture: {
        type: DataTypes.BOOLEAN,
    },
    sent: {
        type: DataTypes.BOOLEAN,
    },
}, {
    timestamps: false
});

module.exports = {Depense: Depense};
