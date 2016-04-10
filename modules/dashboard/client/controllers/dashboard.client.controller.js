'use strict';

// Articles controller
angular.module('dashboard',['ui.grid']).controller('AppController', ['$scope', '$stateParams', '$location', 'Authentication',
  function ($scope, $stateParams, $location, Authentication, Dashboard,$http) {
    $scope.authentication = Authentication;

    $scope.myData = [
      {
        _id: "5693f0e238cab15029ced7eb",
        skill: "node.js",
        experience: "1-2",
        jobId: 1,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "5693f0f338cab15029ced7ec",
        skill: "html",
        experience: "1-2",
        jobId: 1,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "5693f10138cab15029ced7ed",
        skill: "mongo",
        experience: "1-2",
        jobId: 1,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "5693f10b38cab15029ced7ee",
        skill: "Angular",
        experience: "1-2",
        jobId: 1,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "5693f11438cab15029ced7ef",
        skill: "express",
        experience: "1-2",
        jobId: 1,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "569653b9b2874c4010db939e",
        skill: ".net",
        experience: "3-4",
        jobId: 2,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "5696542db2874c4010db939f",
        skill: "sql",
        experience: "3-4",
        jobId: 2,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      },
      {
        _id: "56aa580bb9243f6425144220",
        skill: "test",
        experience: "test",
        jobId: 3,
        jobDescription: "test",
        isOpen: true,
        __v: 0
      }
    ];
  }
]);


/*
var app = angular.module('dashboard', ['ngTouch', 'ui.grid']);

dashboard.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.myData = [
    {
      "firstName": "Cox",
      "lastName": "Carney",
      "company": "Enormo",
      "employed": true
    },
    {
      "firstName": "Lorraine",
      "lastName": "Wise",
      "company": "Comveyer",
      "employed": false
    },
    {
      "firstName": "Nancy",
      "lastName": "Waters",
      "company": "Fuelton",
      "employed": false
    }
  ];
}]);
*/
