'use strict';

// Setting up route
angular.module('dashboard').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        template: 'modules/dashboard/client/views/dashboard.client.view.html'
      });
  }
]);
