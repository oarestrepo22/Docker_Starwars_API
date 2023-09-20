const Character = require('../data');

const createCharacter = async () => {
  const newCharacter = await Character.create();
  return newCharacter;
};

module.exports = createCharacter;
