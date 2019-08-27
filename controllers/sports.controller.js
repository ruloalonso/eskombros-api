const Sport = require('../models/sport.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Sport.find()
    .then(sports => res.json(sports))
    .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  Sport.findOne({ name: req.body.name })
    .then(sport => {
      if (sport) {
        throw createError(409, `Thie sport already exists`);
      } else {
        sport = new Sport({ name: req.body.name });
        sport.save()
          .then(sport => {
            res.status(201).json(sport);
          })
          .catch(error => {
            next(error)
          });
      }
    })
    .catch(error => next(error));
}
