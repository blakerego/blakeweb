angular.module('project-app', ['wu.masonry', 'WordpressConnection',  'templates', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    // route for the home page
    .state({
      name: 'project-index',
      url: '/projects',
      templateUrl : 'projects/index.html',
      controller  : 'projectCtrl'
    })
    .state({
      name: 'project-show',
      url: '/projects/:slug',
      templateUrl: 'projects/show.html',
      controller: 'projectShowCtrl'
    });
    // // route for the about page
    // .when('/about', {
    //     templateUrl : 'pages/about.html',
    //     controller  : 'aboutController'
    // })

    // // route for the contact page
    // .when('/contact', {
    //     templateUrl : 'pages/contact.html',
    //     controller  : 'contactController'
    // });
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

.controller('projectShowCtrl',['$scope','$stateParams', 'WordpressConnection', '$sce',
  function ($scope, $stateParams, WordpressConnection, $sce) {

    var wordpressConnection = new WordpressConnection('blakewebprojects.wordpress.com');
    var wordpress_slug = $stateParams['slug'];
    wordpressConnection.getPostBySlug(wordpress_slug).then(function (response) {
      $scope.pageContent = $sce.trustAsHtml(response.data.content);
    });

  }]);