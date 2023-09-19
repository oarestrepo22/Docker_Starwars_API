const Film = require('../data');

const createFilm = async () => {
  const newCharacter = await Film.create();
  return newCharacter;
};

module.exports = createFilm;
