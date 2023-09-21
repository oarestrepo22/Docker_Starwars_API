const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/planets', handlers.getPlanets);

module.exports = router;
