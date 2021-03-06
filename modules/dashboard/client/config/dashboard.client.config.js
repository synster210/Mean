'use strict';

// Configuring the Articles module
angular.module('dashboard').run(['Menus',
  function (Menus) {
    // Add the needs dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Create',
      state: 'needs',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'needs', {
      title: 'List Articles',
      state: 'needs.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'needs', {
      title: 'Create Articles',
      state: 'needs.create',
      roles: ['user']
    });
  }
]);
