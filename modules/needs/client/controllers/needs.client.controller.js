'use strict';

// Articles controller
angular.module('needs').controller('NeedsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Needs',
  function ($scope, $stateParams, $location, Authentication, Needs) {
    $scope.authentication = Authentication;

    // Create new Article
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'needForm');

        return false;
      }

      // Create new Article object
      var need = new Needs({
        title: this.title,
        content: this.content
      });

      // Redirect after save
      need.$save(function (response) {
        $location.path('needs/' + response._id);

        // Clear form fields
        $scope.title = '';
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (need) {
      if (need) {
        need.$remove();

        for (var i in $scope.needs) {
          if ($scope.needs[i] === need) {
            $scope.needs.splice(i, 1);
          }
        }
      } else {
        $scope.need.$remove(function () {
          $location.path('needs');
        });
      }
    };

    // Update existing Article
    $scope.update = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'articleForm');

        return false;
      }

      var need = $scope.need;

      need.$update(function () {
        $location.path('needs/' + need._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.needs = Needs.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.need = Needs.get({
        needId: $stateParams.needId
      });
    };
  }
]);
