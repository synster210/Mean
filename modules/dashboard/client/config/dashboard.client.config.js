'use strict';

// Configuring the Articles module
angular.module('dashboard').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Create',
      state: 'dashboard',
      type: 'dropdown',
      roles: ['user']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'dashboard', {
      title: 'New Need',
      state: 'dashboard.createNeed'
    });

    Menus.addSubMenuItem('topbar', 'dashboard', {
      title: 'New Candidate',
      state: 'dashboard.createCandidate'
    });

    Menus.addSubMenuItem('topbar', 'dashboard', {
      title: 'New Interview',
      state: 'dashboard.createInterview'
    });

    // Add the dropdown create item

  }
]);
