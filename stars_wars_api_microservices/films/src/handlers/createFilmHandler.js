const controllers = require('../controllers');
const { response } = require('../utils');

const postFilm = async (req, res) => {
  const result = await controllers.createFilm();
  response(res, 201, result);
};

module.exports = postFilm;
