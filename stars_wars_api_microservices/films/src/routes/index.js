const { Router } = require('express');
const handlers = require('../handlers');
const router = Router();

router.get('/films', handlers.getFilms);
router.post('/films', handlers.postFilm);

module.exports = router;
