const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    street: String,
    number: Number,
    city: String,
    map: String
  }
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;