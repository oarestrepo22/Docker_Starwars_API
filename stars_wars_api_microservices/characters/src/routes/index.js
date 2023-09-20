const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/characters', handlers.getCharacters);

router.post('/characters', handlers.postCharacter);

module.exports = router;
