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
    $('#offered').html("");
    var input = $('#pac-input').val();
    $('#secondInput').val(input);
    codeAddress('pac-input');
    getLanguage(input);
  })

  $("#secondInput").keyup(function(event){
    if(event.keyCode == 13){
      $("#secondButton").click();
    }
  });

  $('#searchButton').click(function() {
    $('#offered').html("");
    var input = $('#secondInput').val();
    codeAddress('secondInput');
    getLanguage(input);
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

languages = ['English', 'Portuguese', 'Vietnamese', 'French']

function getLanguage(givenLocation) {
  var formattedLocation = givenLocation.split(" ");

  var country = formattedLocation[formattedLocation.length - 1];

  $.ajax({
    type: "GET",
    url: "https://restcountries.eu/rest/v2/name/" + country,
    success: function (d) {
     $('#lang').val(d[0].languages[0].name);
     if ($.inArray(d[0].languages[0].name, languages) != -1) {
       $('#offered').html("We offer this language! Sign up today!");
       $('.display-none').show();
     } else {
       $('#offered').html("We don't currently offer this language, but we're always adding more languages! Check back in a bit!");
     }
    }
  });
}
