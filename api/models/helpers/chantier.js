const {PersonnalError} = require("../../../utils/personnal-error");
const {Chantier} = require('../chantier.model');
const {getRandomString, getRandomInt} = require("../../../utils/random-utils");
const {Journal} = require("../journal");
const {Depense} = require("../depense");
const {Ouvrier} = require("../ouvrier");
const {Chef} = require("../chef.model");
const {User} = require("../user.model");

async function findChantier(where) {
    try {
        return await Chantier.findOne({
                where: where,
                include: [{
                    model: Journal,
                    include: {
                      model: Depense,
                      separate: true
                    },
                    separate: true
                },
                    {
                        model: Ouvrier,
                    },
                    {
                        model: Chef,
                    },
                    {
                        model: User,
                    }
                ]
            }
        );
    } catch (e) {
        console.log(e);
        throw new PersonnalError('Error when finding chantier', e);
    }
}

async function randomlyUpdateRandomChantier(where) {
    try {
        return await Chantier.update(
            {
                description : getRandomString(12),
                city : getRandomString(12),
                city_cp : getRandomInt(0, 99999),
                date_debut : new Date(getRandomInt(0,2000000000000)),
                date_fin : new Date(getRandomInt(0,2000000000000)),
                status : getRandomString(12),
                lien_sharepoint : getRandomString(12),
                lien_files : getRandomString(12),
                lien_gearth : getRandomString(12),
                prix_moyen_moe_jour : getRandomInt(0, 100),
                prix_moyen_moe_nuit : getRandomInt(0, 100),
                prix_moyen_materiel : getRandomInt(0, 100),
                journal_pointage_erp : getRandomString(12),
            },
            {
                where,
            }
        );
    } catch (e) {
        console.log(e);
        throw new PersonnalError('Error when finding chantier', e);
    }
}


module.exports = {findChantier, randomlyUpdateRandomChantier};
