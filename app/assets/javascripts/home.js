$(window).load( function() {
  $('#myModal').modal('show');
  initMap(61, 0);

  $("#pac-input").keyup(function(event){
    if(event.keyCode == 13){
      $("#modalButton").click();
    }
  });

  $('#modalButton').click(function() {
    $('.close').click();
    var input = $('#pac-input').val();
    $('#secondInput').val(input);
    codeAddress('pac-input')
  })

  $("#secondInput").keyup(function(event){
    if(event.keyCode == 13){
      $("#secondButton").click();
    }
  });

  $('#searchButton').click(function() {
    codeAddress('secondInput');
  })
})

function initMap(lat, lng) {

  if(lat == undefined) {
    lat = 0;
  }

  if(lng == undefined) {
    lng = 0;
  }

  var location = {lat: lat, lng: lng};

  var map = new google.maps.Map(document.getElementById('map'), {
    center: location,
    zoom: 15
  });

  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}

function codeAddress(id) {
  var address = document.getElementById(id).value;

  var geocoder = new google.maps.Geocoder();

  geocoder.geocode( { 'address': address }, function(results, status) {
    if (status == 'OK') {
      initMap(results[0].geometry.location.lat(), results[0].geometry.location.lng());
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  } );
}
