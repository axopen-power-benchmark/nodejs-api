const {getCustomResMessage} = require("../../utils/personnal-error");
const {findChantier, randomlyUpdateRandomChantier} = require("../models/helpers/chantier");

const chantierRoute = require('express').Router();

chantierRoute.get('/', async function (req, res) {
    try {
        const randomId = getRandomInt(0,999);
        const chantier = await findChantier({numero: randomId});
        return res.json(chantier);
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on finding mot', e)})
    }
});

chantierRoute.post('/', async function (req, res) {
    try {
        const randomId = getRandomInt(0,999);
        const chantier = await randomlyUpdateRandomChantier({numero: randomId});
        return res.json(chantier);
    } catch (e) {
        return res.status(500).json({key: getCustomResMessage('Error on finding mot', e)})
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = chantierRoute;
