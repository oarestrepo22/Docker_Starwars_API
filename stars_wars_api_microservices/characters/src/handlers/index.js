const getCharacters = require('./getCharacters');
const postCharacter = require('./postCharacter');
const { catchedAsync } = require('../utils/index');

module.exports = {
  getCharacters: catchedAsync(getCharacters),
  postCharacter: catchedAsync(postCharacter),
};
