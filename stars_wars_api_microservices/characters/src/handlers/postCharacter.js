const controllers = require('../controllers/index');
const { response } = require('../utils');

const postCharacter = async (req, res) => {
  const result = await controllers.createCharacter;
  console.log(result);

  response(res, 200, result);
};

module.exports = postCharacter;
