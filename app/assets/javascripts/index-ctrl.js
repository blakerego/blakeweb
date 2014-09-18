angular.module('blakeHome', [
  'physContainer',
  'WebGLRenderer',
  'BlakeDemo',
  'physBalloonPlanet'
  ])
.controller('indexCtrl', function (
  $scope,
  BlakeDemo,
  WebGLRenderer
  ) {

  var menuElement = $('.focusOnHover').first();
  if (menuElement.offset().top + menuElement.height() < document.documentElement.clientHeight) {
    $('body').css('overflow', 'hidden');
  }

});
