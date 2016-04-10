'use strict';

//Candidates service used for communicating with the candidates REST endpoints
angular.module('candidates').factory('Candidates', ['$resource',
  function ($resource) {
    return $resource('api/candidates/:candidateId', {
      candidateId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
