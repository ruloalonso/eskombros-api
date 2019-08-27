const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  alias: {
    type: String,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: 'Last name is required'
  },
  image: String,
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  }
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;