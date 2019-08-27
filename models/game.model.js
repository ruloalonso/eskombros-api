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
    type: Number,
    required: true
  },
  contender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Contender',
    required: true
  },
  contenderScore: {
    type: Number,
    required: true
  },
  plays: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Play',
    required: true
  }],
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place',
    required: true
  }
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
