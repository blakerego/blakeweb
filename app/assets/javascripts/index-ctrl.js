angular.module('blakeHome', ['balloonModel'])
.controller('indexCtrl', function (
  $scope,
  balloonModel
  ) {

  $scope.balloonModel = balloonModel;

});
