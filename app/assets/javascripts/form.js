// Try to DRY up, it needs to work somehow

function originAutoComplete() {
  var input = document.getElementById('origin');
  var autocomplete = new google.maps.places.Autocomplete(input);
}

function destinationAutoComplete() {
  var input = document.getElementById('destination');
  var autocomplete = new google.maps.places.Autocomplete(input);
}

function locationAutoComplete() {
  var input = document.getElementById('pac-input');
  var autocomplete = new google.maps.places.Autocomplete(input);
}

google.maps.event.addDomListener(window, 'load', originAutoComplete);

google.maps.event.addDomListener(window, 'load', destinationAutoComplete);

google.maps.event.addDomListener(window, 'load', locationAutoComplete);
