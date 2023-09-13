const Character = require('../data/');

const getCharacters = () => {
  const characters = Character.list;
  return characters;
};

module.exports = getCharacters();
