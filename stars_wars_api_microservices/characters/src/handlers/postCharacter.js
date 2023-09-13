const controllers = require('../controllers/index');

const postCharacter = async (req, res) => {
  const result = await controllers.createCharacter;
  console.log(result);

  res.status(201).send(result);
};

module.exports = postCharacter;
