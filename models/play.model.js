const mongoose = require('mongoose');

const playSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true
  },
  game: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Game',
    required: true
  },
  freeMades: {
    type: Number,
    required: true
  },
  freeTotal: {
    type: Number,
    required: true
  },
  twoMades: {
    type: Number,
    required: true
  },
  threeMades: {
    type: Number,
    required: true
  },
  technicalFouls: {
    type: Number,
    required: true
  },
  flagrants: {
    type: Number,
    required: true
  },
  fouls: {
    type: Number,
    required: true
  }
});

const Play = mongoose.model('Play', playSchema);
module.exports = Play;