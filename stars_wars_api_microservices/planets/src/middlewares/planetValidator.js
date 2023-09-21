const ClientError = require('../utils/errors');

const planetValidator = (req, res) => {
  const { name } = req.body;
  // si name existe entonces pasa al handler.createPlanet mediante el return next()
  if (name) return next();
  else throw new ClientError('Name is necessary', 400);
};

module.exports = planetValidator;
