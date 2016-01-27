githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    Search.query(self.searchTerm)
      .then(function(response) {
        self.repoInfo = response.data
        self.searchResult = response.data;
      });
  };
}]);
