const controllers = require('../controllers');

const postFilm = async (req, res) => {
  const result = await controllers.createFilm;
  result ? res.status(200).send(result) : res.status(404).send('not found');
};

module.exports = postFilm;
