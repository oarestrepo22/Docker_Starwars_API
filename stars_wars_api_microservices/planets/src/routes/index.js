const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/planets', handlers.getPlanets);
router.post('/planets', handlers.postPlanet);

module.exports = router;
