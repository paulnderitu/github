var User = require('./../js/request.js').userModule;
var showRepositories = function (repos) {
  $('#showrepos').empty();
  repos.forEach(function(repo) {
    $('#showrepos').append("<li><a href='"+ repo.html_url + "'>" + repo.name + "</a>: " + repo.desription + "</li>");
  });
};
