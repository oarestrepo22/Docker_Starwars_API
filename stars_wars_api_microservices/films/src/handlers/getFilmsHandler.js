const controllers = require('../controllers');
const { response } = require('../utils');

const getFilmsHandler = async (req, res) => {
  const data = await controllers.getFilms;
  response(res, 200, data);
};

module.exports = getFilmsHandler;
