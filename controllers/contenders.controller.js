const Contender = require('../models/contender.model');
const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Contender.find()
    .then(contenders => res.json(contenders))
    .catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  Contender.findOne({ name: req.body.name })
    .then(contender => {
      if (contender) {
        throw createError(409, `Thie contender already exists`);
      } else {
        contender = new Contender({ name: req.body.name });
        contender.save()
          .then(contender => {
            res.status(201).json(contender);
          })
          .catch(error => {
            next(error)
          });
      }
    })
    .catch(error => next(error));
}
