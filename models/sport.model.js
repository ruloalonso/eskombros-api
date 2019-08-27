const mongoose = require('mongoose');

const sportsSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

const Sport = mongoose.model('Sport', sportsSchema);
module.exports = Sport;