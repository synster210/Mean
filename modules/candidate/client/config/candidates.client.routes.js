'use strict';

// Setting up route
angular.module('candidates').config(['$stateProvider',
  function ($stateProvider) {
    // Candidates state routing
    $stateProvider
        .state('candidates', {
          abstract: true,
          url: '/candidate',
          templateUrl: 'modules/candidate/client/views/candidates.client.view.html',
        })
        .state('candidates.create', {
          url: '/create',
          templateUrl: 'modules/candidate/client/views/create-candidate.client.view.html'
        })
        .state('candidates.edit', {
          url: '/edit',
          templateUrl: 'modules/candidate/client/views/edit-candidate.client.view.html'
        })
        .state('candidates.list', {
          url: '/list',
          templateUrl: 'modules/candidate/client/views/list-candidates.client.view.html'
        });
  }
]);
