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
  $scope.firstName= '';
  $scope.email = '';
  $scope.nameRegex = /^[a-zA-Z]+$/i;
});

