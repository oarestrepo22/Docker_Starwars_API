const planets = require('./planets.json');

module.exports = {
  list: async () => {
    return planets;
  },

  create: async () => {
    throw Error('Error creating planet on DB');
  },
};
