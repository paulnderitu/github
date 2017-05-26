var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#usernameRepos').click(function() {
    var username = $('#username').val();
    $('#username').val("");
    $('.showrepos').text("The username you entered is " + username + ".");
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  });
  });
});
