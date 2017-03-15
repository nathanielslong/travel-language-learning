$(document).ready(function(){


     var station = 1; 
     $('#Walk_Right_btn').click(function () {
        rob = $('.Robert');
    	if (station <= 4){
        	rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
    	}
    	if (station == 5){
    		//rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
    		rob.addClass('Walk_Down').delay(3300).fadeIn(10, function() { rob.removeClass('Walk_Down').addClass('Robert_station' + station); station += 1;});
    	}
    	if (station > 5){
    		//rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
    		rob.addClass('Walk_Left').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Left').addClass('Robert_station' + station); station += 1;});

    	}
    	
    	console.log(station);	
    });




});