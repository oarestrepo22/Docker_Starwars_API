const controllers = require('../controllers');

const postPlanet = async (req, res) => {
  const result = await controllers.createPlanetOnDb();
  res.status(201).send(result);
};

module.exports = postPlanet;
