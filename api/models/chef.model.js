const {DataTypes} = require('sequelize');
const {sequelize} = require('./database-connection');
const {Chantier} = require("./chantier.model");
const {User} = require("./user.model");

const Chef = sequelize.define('chef_chantier_user', {
    numero_chantier: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
            model: Chantier,
            key: 'numero'
        }
    },
    matricule_user: {
        type: DataTypes.STRING(255),
        primaryKey: true,
        onDelete: 'CASCADE',
        references: {
            model: User,
            key: 'matricule'
        }
    },
}, {
    timestamps: false
});

Chef.associate = (models) => {
    Chef.belongsToMany(models.User, {as: 'User', uniqueKey: 'numero_chantier'})
    Chef.belongsToMany(models.Chantier, {as: 'Chantier', uniqueKey: 'numero_chantier'})
}

module.exports = {Chef: Chef};
