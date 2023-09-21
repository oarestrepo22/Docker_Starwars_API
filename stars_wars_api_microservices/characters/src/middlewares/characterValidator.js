const ClientError = require('../utils/errors');

const characterValidator = (req, res, next) => {
  const { name } = req.body;
  if (name) return next();
  else throw new ClientError('Name is necessary', 444);
};

module.exports = characterValidator;
