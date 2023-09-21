const { Router } = require('express');
const handlers = require('../handlers');
const middlewares = require('../middlewares');
const router = Router();

router.get('/films', handlers.getFilms);
router.post('/films', middlewares.filmValidator, handlers.postFilm);

module.exports = router;
