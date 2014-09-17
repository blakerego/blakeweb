angular.module('blakeHome', [
  'balloonModel',
  'physContainer',
  'WebGLRenderer',
  'BlakeDemo',
  'physBalloonPlanet'
  ])
.controller('indexCtrl', function (
  $scope,
  balloonModel,
  BlakeDemo,
  WebGLRenderer
  ) {

  // $scope.balloonModel = balloonModel;

  var menuElement = $('.focusOnHover').first();
  if (menuElement.offset().top + menuElement.height() < document.documentElement.clientHeight) {
    $('body').css('overflow', 'hidden');
  }

  // var demo, playing, renderer, container;

  // function init() {
  //   playing = true;
  //   container = $('#container');
  //   if (demo) {
  //     demo.destroy();
  //     demo = null;
  //   }
  //   demo = new BlakeDemo();
  //   demo.init(container.get(0), new WebGLRenderer());
  //   update();
  // }

  // function update() {
  //   requestAnimationFrame(update);
  //   if (playing && demo) {
  //     demo.step();
  //   }
  // }

  // init();

});
