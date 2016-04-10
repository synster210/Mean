  'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Candidate = mongoose.model('Candidate'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a candidate
 */
exports.create = function (req, res) {
  var candidate = new Candidate(req.body);
  candidate.firstName = req.firstName;
  candidate.lastName = req.lastName;
  candidate.skillSet = req.skillSet;
  candidate.phone = req.phone;
  candidate.email = req.email;
  candidate.referred = req.referred;
  candidate.comment = req.comment;
  candidate.user = req.user;

  candidate.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(candidate);
    }
  });
};

/**
 * Show the current candidate
 */
exports.read = function (req, res) {
  res.json(req.candidate);
};

/**
 * Update a candidate
 */
exports.update = function (req, res) {
  var candidate = req.candidate;

  candidate.firstName = req.body.firstName;
  candidate.lastName = req.body.lastName;
  candidate.skillSet = req.body.skillSet;
  candidate.phone = req.body.phone;
  candidate.email = req.body.email;
  candidate.referred = req.referred;
  candidate.user = req.body.user;
  candidate.comment = req.body.comment;

  candidate.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(candidate);
    }
  });
};

/**
 * Delete an article
 */
exports.delete = function (req, res) {
  var candidate = req.candidate;

  candidate.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(candidate);
    }
  });
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
  Candidate.find().sort('-lastName').populate('lastName', 'lastName').exec(function (err, candidates) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(candidates);
    }
  });
};

/**
 * Article middleware
 */
exports.candidateByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'Candidate is invalid'
    });
  }

  Candidate.findById(id).populate('lastName', 'lastName').exec(function (err, candidate) {
    if (err) {
      return next(err);
    } else if (!candidate) {
      return res.status(404).send({
        message: 'No candidate with that identifier has been found'
      });
    }
    req.article = candidate;
    next();
  });
};
