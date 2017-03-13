$(window).load( function() {
  $('#myModal').modal('show');
  $("#pac-input").keyup(function(event){
    if(event.keyCode == 13){
      $("#modalButton").click();
    }
  });

  $('#modalButton').click(function() {
    $('.close').click();
    var input = $('#pac-input').val();
    $('#secondInput').val(input);
  })
} )


