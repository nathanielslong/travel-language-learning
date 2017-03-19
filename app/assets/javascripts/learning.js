$(document).ready(function(){



	var station = 2; 
	$( document).keydown(function( event ) {
		if ( event.which == 39 ) {
			rob = $('.Robert');
			stationContainer = $('.station-container')
			if (station <= 4){
				// ($('station-cell'))[station].addClass('hidden');
				document.getElementsByClassName("station-cell")[station-2].style.visibility = "hidden"

				rob.addClass('Walk_Right').delay(2800).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
			}
			if (station == 5){
	    		//rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
	    		stationContainer.classList.add('vertical-translate')
	    		rob.addClass('Walk_Down').delay(2800).fadeIn(10, function() { rob.removeClass('Walk_Down').addClass('Robert_station' + station); station += 1;});
	    	}
	    	if (station > 5){
	    		stationContainer.classList.add('vertical-translate')
	    		//rob.addClass('Walk_Right').delay(4300).fadeIn(10, function() { rob.removeClass('Walk_Right').addClass('Robert_station' + station); station += 1;});
	    		rob.addClass('Walk_Left').delay(2800).fadeIn(10, function() { rob.removeClass('Walk_Left').addClass('Robert_station' + station); station += 1;});

	    	}
	    	if (station > 8){
	    		location.reload();
	    	}
	    	console.log(station);	
	    	
	    }
	});


	function Station(id, name, language, title, description){
		this.id = id;
		this.name = name;
		this.language = language;
		this.title = title;
		this.description = [];
	};

	var bodyContainer = document.getElementsByClassName("learning-container")[0];
	var storyboardContainer = document.getElementsByClassName("station-container")[0];
	var viewportWidth = document.documentElement.clientWidth;
	var viewportHeight = document.documentElement.clientHeight;

	var station1 = new Station('1','station1','French','At the airport');
	station1.description = ['Bonjour. S’il vous plaît… (Hello, please…)','Oui / Non (Yes / No)', 'Parlez-vous anglais ? (Do you speak English?)'];
	var station2 = new Station('2','station2','French','To get information / direction'); 
	station2.description = ['Où est-ce que je peux trouver un plan de la ville ? (Where can I find a city map?)',' Merci beaucoup ! (Thank you very much!)', 'Gauche (Left)', 'Droite (Right)'];
	var station3 = new Station('3','station3','French', 'At the transportation');
	station3.description = ['Où est le guichet ? (Where is the ticket window?)','Je cherche le bus/train/métro. Où est l’arrêt le plus près? (I am looking for the bus/train/subway. Where is the nearest stop?)'];
	var station4 = new Station('4','station4','French','To get a room');
	station4.description = ['Est-ce que vous avez une chambre disponible ? (Do you have a room available?)','Combien ça coûte? (How much does that cost?)', 'Pour deux personnes. (For two people)'];
	var station5 = new Station('5','station5','French','To start a conversation');
	station5.description = ['Bonjour, comment-allez-vous? (Hello, how are you?)', 'Comment vous appelez-vous? (What is your name?)','Do you speak English? (Parlez-vous Anglais?)', 'Oui / Non (Yes / No)'];
	var station6 = new Station('6','station6','French','In a restaurant / coffee shop');
	station6.description = ['Je voudrais… (I would like…)','Excusez moi (Excuse me)', 'Je voudrais payer, s’il vous plaît. (I would like to pay, please.)'];
	var station7 = new Station('7','station7','French','In a hangout , activities');
	station7.description = ['C’est combien le billet ? (How much is the ticket?)','La séance est à quelle heure ? (At what time does the movie start?)','À votre santé !(To your good health!)'];
	var station8 = new Station('8','station8','French','To do a shopping');
	station8.description = ['Où se trouve la caisse ? (Where is the check out?)', 'Combien ça coûte ?(How much does it cost?)', 'Quelle est cette taille ? (Which size is that?)', 'Où se trouvent les cabines d’essayage ? (Where are the changing rooms?)','C’est joli. (It looks good.)'];

//set array of job variables to be looped through later. 
	var stations = [station1, station2, station3, station4, station5, station6, station7, station8];
	var stationsLength = stations.length; 
	var storyboardWidth = viewportWidth*stationsLength;
	var width = storyboardWidth;

	forthWidth = viewportWidth * (0.25);
	threeForthWidth = viewportWidth * (0.75);
	learningStation();

	function learningStation(){
		for (var i = 0; i < stationsLength; i++) {
			var stationObject = stations[i];
			var stationCell = document.createElement("div");
			stationCell.className = "station-cell";
			stationCell.style.width = viewportWidth.toString() + "px";
			// stationCell.
			storyboardContainer.appendChild(stationCell);
			var currentStationCell = document.getElementsByClassName("station-cell")[i];
			var currentStation = document.createElement("div");
			currentStation.className = "station";
			currentStation.style.width = forthWidth.toString() + "px";
			currentStation.style.marginLeft = threeForthWidth.toString() + "px";
			currentStation.marginTop = forthWidth.toString() + "px";
			// currentJob.style.marginRight = fourColumns.toString() + "px";
			// currentJob.style.background = jobObject.name;
			currentStationCell.appendChild(currentStation);

			var currentStationContent = document.createElement("div");
			currentStationContent.className = "station-content";
			currentStation.appendChild(currentStationContent);
			var currentStationTitle = document.createElement("div");
			currentStationTitle.className = "station-content-title";
			currentStationTitle.innerHTML = stationObject.id + ". " + stationObject.title;
			// currentStationTitle.style.height = fifthHeight.toString() + "px";
			currentStationContent.appendChild(currentStationTitle);

			var currentStationDescription = document.createElement("div");
			currentStationDescription.className = "station-description-container";
			currentStation.appendChild(currentStationDescription);
			var currentStationDescriptionContent = document.createElement("div");
			currentStationDescriptionContent.className = "station-description-content";
			currentStationDescriptionContent.style.fontSize = "8px";
			currentStationDescription.appendChild(currentStationDescriptionContent);

			
			var descriptionLength = stationObject.description.length;

			var stationDescriptionContentPhrases = document.createElement("div");
			stationDescriptionContentPhrases.className = "station-description-content-phrases";
			for (var x = 0; x < descriptionLength; x++) {
				// console.log(descriptionArray[x]);
				var descriptionArray = document.createElement("p");
				descriptionArray.innerHTML = stationObject.description[x] ;
				stationDescriptionContentPhrases.appendChild(descriptionArray)
			}
			// stationDescriptionContentPhrases.innerHTML = descriptionArray ;
			console.log(stationDescriptionContentPhrases)
			currentStationDescriptionContent.appendChild(stationDescriptionContentPhrases);
		}
		window.scrollTo = (0, 0);
		document.getElementsByClassName("learning-container")[0].scrollUp = 0;
		document.getElementsByClassName("station-container")[0].scrollLeft = 0;
		document.getElementsByClassName("station")[0].scrollLeft = 0;
		document.getElementsByClassName("station-cell")[0].scrollLeft = 0;
		document.getElementsByClassName("station-content")[0].scrollLeft = 0;
		document.getElementsByClassName("station-description-content")[0].scrollLeft = 0;
	}
	function stationAnimation(station){

	}

});








