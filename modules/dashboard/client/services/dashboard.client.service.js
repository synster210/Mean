'use strict';

//Articles service used for communicating with the needs REST endpoints
angular.module('dashboard').factory('Dashboard', ['$resource',
  function ($resource) {
    return $resource('api/needs/:articleId', {
      articleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
