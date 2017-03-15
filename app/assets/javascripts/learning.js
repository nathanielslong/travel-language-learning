$(document).ready(function(){


     var station = 1; 
     $('#Walk_Right_btn').click(function () {
        rob = $('.Robert');
        rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});

        console.log(station)
    	
    });




});