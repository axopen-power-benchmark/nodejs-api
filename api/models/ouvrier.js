const {DataTypes} = require('sequelize');
const {sequelize} = require('./database-connection');
const {Chantier} = require("./chantier.model");
const {User} = require("./user.model");

const Ouvrier = sequelize.define('ouvrier_chantier', {
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
    matricule_user: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'matricule'
        }
    },
    matricule: {
        type: DataTypes.STRING(255),
    },
    unbind: {
        type: DataTypes.BOOLEAN,
    },
}, {
    timestamps: false
});

Ouvrier.associate = (models) => {
    Ouvrier.belongsToMany(models.User, {as: 'User', uniqueKey: 'numero_chantier'})
    Ouvrier.belongsToMany(models.Chantier, {as: 'Chantier', uniqueKey: 'numero_chantier'})
}


module.exports = {Ouvrier: Ouvrier};
