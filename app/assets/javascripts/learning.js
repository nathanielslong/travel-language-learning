$(document).ready(function(){


     var station = 1; 
     $( document).keydown(function( event ) {
		  if ( event.which == 39 ) {
	        rob = $('.Robert');
	    	if (station <= 4){
	        	rob.addClass('Walk_Right').delay(2800).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
	    	}
	    	if (station == 5){
	    		//rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
	    		rob.addClass('Walk_Down').delay(2800).fadeIn(10, function() { rob.removeClass('Walk_Down').addClass('Robert_station' + station); station += 1;});
	    	}
	    	if (station > 5){
	    		//rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
	    		rob.addClass('Walk_Left').delay(2800).fadeIn(10, function() { rob.removeClass('Walk_Left').addClass('Robert_station' + station); station += 1;});

	    	}
	    	if (station > 8){
	    		// station = 1;
	    		// rob.removeClass('Robert_station1 Robert_station2 Robert_station3 Robert_station4 Robert_station5 Robert_station6 Robert_station7 Robert_station8');
	    		// console.log("really: "+station);
	    		location.reload();
	    	}
	    	console.log(station);	
		   
		  }
    });




});