function originAutoComplete() {
  var input = document.getElementById('origin');
  var autocomplete = new google.maps.places.Autocomplete(input);
}

function destinationAutoComplete() {
  var input = document.getElementById('destination');
  var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', originAutoComplete);

google.maps.event.addDomListener(window, 'load', destinationAutoComplete);

var myFormApp = angular.module('myFormApp', []);

myFormApp.controller('mainController', function($scope) {
  $scope.firstName = '';
  $scope.lastName = '';
  $scope.email = '';
  $scope.nameRegex = new RegExp(/^[a-zA-Z]+$/i);
  $scope.emailRegex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});

$('form > input').keyup(function() {
  var empty = false;
  $('form > input').each(function() {
    if ($(this).val() == '') {
      empty = true;
    }
  })

  if (empty) {
    $('.btn-primary').attr('disabled', 'disabled');
  } else {
    $('.btn-primary').removeAttr('disabled');
  }
})
