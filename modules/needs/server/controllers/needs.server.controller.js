'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Need = mongoose.model('Need'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a article
 */
exports.create = function (req, res) {
  var need = new Need(req.body);
  need.user = req.user;

  need.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(need);
    }
  });
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
  res.json(req.need);
};

/**
 * Update a article
 */
exports.update = function (req, res) {
  var need = req.need;

  need.title = req.body.title;
  need.content = req.body.content;

  need.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(need);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var need = req.need;

  need.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(need);
    }
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Need.find().sort('-created').populate('user', 'displayName').exec(function (err, needs) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(needs);
    }
  });
};

/**
 * Article middleware
 */
exports.needByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Need is invalid'
    });
  }

  Need.findById(id).populate('user', 'displayName').exec(function (err, need) {
    if (err) {
      return next(err);
    } else if (!need) {
      return res.status(404).send({
        message: 'No article with that identifier has been found'
      });
    }
    req.need = need;
    next();
  });
};
