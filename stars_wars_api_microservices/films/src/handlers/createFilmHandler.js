const controllers = require('../controllers');
const { response } = require('../utils');

const postFilm = async (req, res) => {
  try {
    const result = await controllers.createFilm();
    response(res, 201, result);
  } catch (error) {
    // crear errorResponse
    res.status(400).json({ error: error.message });
  }
};

module.exports = postFilm;
