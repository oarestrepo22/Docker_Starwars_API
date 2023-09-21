const { Router } = require('express');
const handlers = require('../handlers');
const middlewares = require('../middlewares');

const router = Router();

router.get('/characters', handlers.getCharacters);

router.post(
  '/characters',
  middlewares.characterValidator,
  handlers.postCharacter
);

module.exports = router;
