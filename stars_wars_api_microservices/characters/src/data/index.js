const characters = require('./characters.json');

module.exports = {
  list: async () => {
    return characters;
  },

  create: async () => {
    throw Error('Error creating character on DB ');
  },
};
