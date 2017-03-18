//= require revamp
angular.module('blakeHome')
.controller('projectCtrl', ['$scope', '$http', 'WordpressConnection',
  function ($scope, $http, WordpressConnection) {

    var wordpressConnection = WordpressConnection('blakewebprojects.wordpress.com');

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

    $scope.projectClicked = function (project) {
      wordpressConnection.posts(1, 8).then(function (response) {
        console.log('posts returned');
        console.log(response.data);
      })
    };

  }
]);