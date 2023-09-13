const { Router } = require('express');
const handlers = require('../handlers');
const router = Router();

router.get('/', handlers.getFilms);
router.post('/', handlers.postFilm);

module.exports = router;
