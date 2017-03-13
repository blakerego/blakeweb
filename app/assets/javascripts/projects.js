//= require revamp
angular.module('blakeHome')
.controller('projectCtrl', ['$scope', '$http',
  function ($scope, $http) {

    $scope.projects = [];

    $scope.masonryOptions = {
      transitionDuration: '1s',
      columnWidth: 300,
      gutter: 3,
      originLeft: true
    };

    $http.get('/projects.json').then(function (response) {
      $scope.projects = response.data;
    });

  }
]);