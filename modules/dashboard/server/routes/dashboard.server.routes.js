'use strict';

/**
 * Module dependencies.
 */
var articlesPolicy = require('../policies/dashboard.server.policy.js'),
  articles = require('../controllers/dashboard.server.controller.js');

module.exports = function (app) {
  // Articles collection routes
  app.route('/api/needs').all(articlesPolicy.isAllowed)
    .get(articles.list)
    .post(articles.create);

  // Single article routes
  app.route('/api/needs/:articleId').all(articlesPolicy.isAllowed)
    .get(articles.read)
    .put(articles.update)
    .delete(articles.delete);

  // Finish by binding the article middleware
  app.param('articleId', articles.articleByID);
};
