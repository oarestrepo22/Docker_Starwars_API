const getFilms = require('./getFilmsHandler');
const postFilm = require('./createFilmHandler');
const catchedAsync = require('../utils/catchedAsync');

module.exports = {
  getFilms: catchedAsync(getFilms),
  postFilm: catchedAsync(postFilm),
};
