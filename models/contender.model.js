const mongoose = require('mongoose');

const contenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  sport: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sport',
    required: true
  }
});

const Contender = mongoose.model('Contender', contenderSchema);
module.exports = Contender;