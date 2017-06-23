
var apiKey = require('./../.env').apiKey;
  $.get('https://api.github.com/users/' +name + '/repos?access_token=' + apiKey).then(function(repos){
    displayFunction(repos);
  }).fail(function(error){
    $('.showUser').text("Username" + name + "repos" + error.responseJSON.message + "." + "Enter a valid github Username");
  });

exports.userModule = User;
