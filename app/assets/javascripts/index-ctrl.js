angular.module('blakeHome', ['balloonModel'])
.controller('indexCtrl', function (
  $scope,
  balloonModel
  ) {

  $scope.balloonModel = balloonModel;

  var menuElement = $('.focusOnHover').first();
  if (menuElement.offset().top + menuElement.height() < document.documentElement.clientHeight) {
    $('body').css('overflow', 'hidden');
  }

  var demo, playing, renderer, container;

  function init() {
    playing = true;
    renderer = 'WebGLRenderer';
    container = $('#container');
    if (demo) {
      demo.destroy();
      demo = null;
    }
    demo = new BlakeDemo();
    demo.init(container.get(0), new self[ renderer ]());
    update();
  }

  function update() {
    requestAnimationFrame(update);
    if (playing && demo) {
      demo.step();
    }
  }

  init();

});
