angular.module('blakeHome', [
  'physContainer',
  'WebGLRenderer',
  'physBalloonPlanet'
  ])
.controller('indexCtrl', function (
  $scope,
  WebGLRenderer
  ) {

  var menuElement = $('.focusOnHover').first();
  if (menuElement.offset().top + menuElement.height() < document.documentElement.clientHeight) {
    $('body').css('overflow', 'hidden');
  }

});
