'use strict';

/**
 * Module dependencies.
 */
var candidatesPolicy = require('../policies/candidates.server.policy'),
  candidates = require('../controllers/candidates.server.controller');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/candidates').all(candidatesPolicy.isAllowed)
    .get(candidates.list)
    .post(candidates.create);

  // Single article routes
app.route('/api/candidates/:candidateId').all(candidatesPolicy.isAllowed)
    .get(candidates.read)
    .put(candidates.update)
    .delete(candidates.delete);

  // Finish by binding the article middleware
  app.param('candidateId', candidates.candidateByID);
};
