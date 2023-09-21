const Planets = require('../data');

const getPlanetsFromDb = () => {
  const planets = Planets.list();
  return planets;
};

module.exports = getPlanetsFromDb;
