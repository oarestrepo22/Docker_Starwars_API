const Films = require('../data');

const getFilms = () => {
  const films = Films.list();
  return films;
};

module.exports = getFilms;
