const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sport',
    required: true
  },
  season: {
    type: Number,
    required: true
  },
  players: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
  }],
  tournament: {
    type: String,
    enum: ['regular', 'spring'],
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'mixed'],
    required: true
  }
});

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;