//= require revamp
angular.module('blakeHome')
.controller('projectCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $scope.projects = [];

    $scope.masonryOptions = {
      transitionDuration: '1s',
      columnWidth: 200,
      gutter: 0
    };

    $http.get('/projects.json').then(function (response) {
      $scope.projects = response.data;
    });

  }
]);