angular.module('WordpressConnection', [])
.service('WordpressConnection', ['$http', function ($http) {

  var wordpressConnection = {

    baseUrl: 'https://public-api.wordpress.com/rest/v1/sites/',

    siteId: null,

    posts: function (page, perPage) {
      if (page == null) {
        page = 1;
      }
      if (perPage == null) {
        perPage = 8;
      }
      return $http.get(wordpressConnection.baseUrl +
        wordpressConnection.siteId + '/posts?page=' +
        page + '&number=' + perPage);
    },

    getPostBySlug: function (slug) {
      return $http.get(wordpressConnection.baseUrl +
        wordpressConnection.siteId + '/posts/slug:' +
        slug);
    }
  };

  return function (siteId) {
    wordpressConnection.siteId = siteId;
    return wordpressConnection;
  };
}]);