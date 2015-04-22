angular.module('blakeHome', [
  'physBalloonPlanet'
  ])
.controller('indexCtrl', ['$scope', 'WebGLRenderer', function (
  $scope
  ) {

  var menuElement = $('.focusOnHover').first();
  if (menuElement.offset().top + menuElement.height() < document.documentElement.clientHeight) {
    $('body').css('overflow', 'hidden');
  }

}]);
