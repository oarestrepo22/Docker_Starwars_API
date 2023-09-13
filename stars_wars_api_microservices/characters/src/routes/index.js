const { Router } = require('express');
const handlers = require('../handlers');

const router = Router();

router.get('/', handlers.getCharacters);

router.post('/', handlers.postCharacter);

module.exports = router;
