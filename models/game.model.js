const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sport',
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true
  },
  teamScore: {
    type: Number
  },
  contender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contender',
    required: true
  },
  contenderScore: {
    type: Number
  },
  plays: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Play'
  }],
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place'
  }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
