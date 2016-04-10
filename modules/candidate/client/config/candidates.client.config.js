'use strict';
//
//// Configuring the Candidates module
angular.module('candidates').run(['Menus',
  function (Menus) {
    // Add the candidates dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Candidates',
      state: 'candidates',
      type: 'dropdown',
      roles: ['user']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'candidates', {
      title: 'List Candidates',
      state: 'candidates.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'candidates', {
      title: 'Create Candidates',
      state: 'candidates.create'
    });
  }
]);
