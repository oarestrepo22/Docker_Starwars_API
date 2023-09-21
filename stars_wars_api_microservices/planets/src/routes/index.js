const { Router } = require('express');
const handlers = require('../handlers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/planets', handlers.getPlanets);
router.post('/planets', middlewares.planetValidator, handlers.postPlanet);

module.exports = router;
