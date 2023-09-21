const controllers = require('../controllers');
const { response } = require('../utils');

module.exports = async (req, res) => {
  const result = await controllers.getCharacters();
  response(res, 200, result);
};
