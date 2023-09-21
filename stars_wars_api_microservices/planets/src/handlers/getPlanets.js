const controllers = require('../controllers');

const getPlanets = async (req, res) => {
  const planets = await controllers.getPlanetsFromDb();

  res.status(200).json({
    error: false,
    planets,
  });
};

module.exports = getPlanets;
