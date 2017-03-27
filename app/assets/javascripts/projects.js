angular.module('project-app', ['wu.masonry', 'WordpressConnection',  'templates', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    // route for the home page
    .state({
      name: 'projects',
      url: '/projects',
      templateUrl : 'projects/index.html',
      controller  : 'projectCtrl'
    })
    .state({
      name: 'project-show',
      url: '/projects/slug/:slug',
      templateUrl: 'projects/show.html',
      controller: 'projectShowCtrl'
    });
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

}])


.controller('projectCtrl', ['$scope', '$http', '$state',
  function ($scope, $http, $state) {

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
      if (project.wordpress_slug != null) {
        $state.go('project-show', {
          'slug': project.wordpress_slug
        });
      }
    };

  }
])

.controller('projectShowCtrl',['$scope','$stateParams', 'WordpressConnection', '$sce', '$state',
  function ($scope, $stateParams, WordpressConnection, $sce, $state) {

    var wordpress_slug = $stateParams['slug'];
    if (wordpress_slug == null || wordpress_slug === '') {
      $state.go('projects');
    }
    var wordpressConnection = new WordpressConnection('blakewebprojects.wordpress.com');
    wordpressConnection.getPostBySlug(wordpress_slug).then(function (response) {
      $scope.pageContent = $sce.trustAsHtml(response.data.content);
    });

  }]);