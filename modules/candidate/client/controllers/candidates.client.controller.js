'use strict';

// Candidates controller
angular.module('candidates').controller('CandidatesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Candidates',
  function ($scope, $stateParams, $location, Authentication, Candidates) {
    $scope.authentication = Authentication;

    // Create new Candidate
    $scope.create = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'candidateForm');

        return false;
      }

      // Create new Candidate object
      var candidate = new Candidates({
        firstName: this.firstName,
        lastName: this.lastName,
        skillSet: this.skillSet,
        phone:this.phone,
        email:this.email,
        referred:this.referred,
        comment:this.comment
      });

      // Redirect after save
      candidate.$save(function (response) {
        $location.path('candidates/' + response._id);

        // Clear form fields
        $scope.firstName = '';
        $scope.lastName = '';
        $scope.skillSet = '';
        $scope.phone = '';
        $scope.email = '';
        $scope.referred = '';
        $scope.comment = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Remove existing Article
    $scope.remove = function (candidate) {
      if (candidate) {
        candidate.$remove();

        for (var i in $scope.candidates) {
          if ($scope.candidates[i] === candidate.Id) {
            $scope.candidates.splice(i, 1);
          }
        }
      } else {
        $scope.candidate.$remove(function () {
          $location.path('candidates');
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

      var candidate = $scope.candidate;

      candidate.$update(function () {
        $location.path('candidates/' + candidate._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };

    // Find a list of Articles
    $scope.find = function () {
      $scope.candidates = Candidates.query();
    };

    // Find existing Article
    $scope.findOne = function () {
      $scope.candidate = Candidates.get({
        candidateId: $stateParams.candidateId
      });
    };
  }
]);
