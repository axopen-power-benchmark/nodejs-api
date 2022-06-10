const express = require('express');

const router = express.Router();

const chantier = require('./routes/chantier');

// Unprotected routes
router.use('/chantier', chantier);

module.exports = router;
