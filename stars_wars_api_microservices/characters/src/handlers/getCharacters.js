const controllers = require('../controllers');

module.exports = async (req, res) => {
  const result = await controllers.getCharacters();
  //console.log(result);

  res.status(200).json(result);
};
