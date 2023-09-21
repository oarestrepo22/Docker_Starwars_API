const Planets = require('../data');

const createPlanetOnDb = async () => {
  const newPlanet = await Planets.create();
  return newPlanet;
};
module.exports = createPlanetOnDb;
