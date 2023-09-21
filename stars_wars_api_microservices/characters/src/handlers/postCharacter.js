const controllers = require('../controllers');
const { response } = require('../utils');

const postCharacter = async (req, res) => {
  const result = await controllers.createCharacter();
  response(res, 201, result);
};

module.exports = postCharacter;
