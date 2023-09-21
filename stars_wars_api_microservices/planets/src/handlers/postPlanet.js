const controllers = require('../controllers');
const { response } = require('../utils');

const postPlanet = async (req, res) => {
  const result = await controllers.createPlanetOnDb();
  response(res, 201, result);
};

module.exports = postPlanet;
