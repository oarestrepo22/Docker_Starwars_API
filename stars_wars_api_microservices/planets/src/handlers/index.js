const getPlanets = require('./getPlanets');
const postPlanet = require('./postPlanet');
const { catchedAsyncError } = require('../utils');

module.exports = {
  getPlanets: catchedAsyncError(getPlanets),
  postPlanet: catchedAsyncError(postPlanet),
};
