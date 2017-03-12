angular.module('blakeHome', ['youtube-embed', 'wu.masonry'])
.controller('revampCtrl', ['$scope',
  function ($scope) {
  

  $scope.playerVars = {
    controls: 0,
    autoplay: 1,
    loop: 1,
    showinfo: 0
  };

  var videos = [
    'kpxKwd7fMrE',
    'g6jTcPiDZIo',
    'IriSev7Kx2I,',
    'wQDcjtTol-k',
    'dPK-xJtpTPE',
    '63A2YkwQ6ns',
    'PC5LX3U8RKw',
    'HotrawSgo6k',
    'uBllyeNs9AI',
    'mIfx0pYM6c8',
    'Bk5g54ckleM',
    '7DGlL7A9_JM',
    'mGS0EXXhk8M', //barcelona
    'Af-EA8H9yyA',
    'QPwn98w5D7Y',
    'PHVUd-p1hH0',
    'S2EmzmJOYZ0',
    'mJFt04vJKCw',
    'rj3fv0VUv-Y',
    'baSGcYIU4Xo',
    'OdBVaRZkxS8',
  ];
  function getNextVideo() {
    var nextVid = videos[Math.floor(Math.random() * 100) % videos.length];
    if (nextVid === $scope.videoId) {
      getNextVideo();
    } else {
      $scope.videoId = nextVid;
    }
  }
  getNextVideo();

  $scope.$on('youtube.player.ended', function (/*$event, player*/) {
    // https://developers.google.com/youtube/iframe_api_reference
    getNextVideo();
  });

  $scope.$on('youtube.player.ready', function ($event, player) {
    player.mute();
  });

  $scope.getNextVideo = getNextVideo;

}]);
