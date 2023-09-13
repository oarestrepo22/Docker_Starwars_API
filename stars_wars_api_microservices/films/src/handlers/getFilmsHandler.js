const controllers = require('../controllers');

const getFilmsHandler = async (req, res) => {
  const result = await controllers.getFilms;
  res.status(200).json(result);
};

module.exports = getFilmsHandler;
