const controllers = require('../controllers');
const { response } = require('../utils');

const getPlanets = async (req, res) => {
  const planets = await controllers.getPlanetsFromDb();
  response(res, 200, planets);
};

module.exports = getPlanets;
