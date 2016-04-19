'use strict';

// Setting up route
angular.module('needs').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('needs', {
        abstract: true,
        url: '/needs',
        template: '<ui-view/>'
      })
      .state('needs.list', {
        url: '',
        templateUrl: 'modules/needs/client/views/list-need.client.view.html'
      })
      .state('needs.create', {
        url: '/create',
        templateUrl: 'modules/needs/client/views/create-need.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      })
      .state('needs.view', {
        url: '/:needId',
        templateUrl: 'modules/needs/client/views/view-need.client.view.html'
      })
      .state('needs.edit', {
        url: '/:articleId/edit',
        templateUrl: 'modules/needs/client/views/edit-need.client.view.html',
        data: {
          roles: ['user', 'admin']
        }
      });
  }
]);
