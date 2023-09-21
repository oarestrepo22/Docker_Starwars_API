const ClientError = require('../utils/errors');

const filmValidator = (req, res) => {
  const { name } = req.body;
  // si name existe entonces paso al siguiente paso, en este caso el postHandler
  if (name) return next();
  else throw new ClientError('Name is necessary', 400);
};

module.exports = filmValidator;
