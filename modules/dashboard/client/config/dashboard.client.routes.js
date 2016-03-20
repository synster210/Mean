'use strict';

// Setting up route
angular.module('articles').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('dashboard', {
        abstract: true,
        url: '/dashboard',
        template: '<ui-view/>'
      })
        .state('dashboard.view', {
        url: '/view',
        templateUrl: 'modules/dashboard/client/views/view-dashboard.client.view.html'
      });
  }
]);
