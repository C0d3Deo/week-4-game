$(document).ready(function() {

//This code was copied from the internet however I will comment my understanding of the function
$('<div id="overlay">').css({//creating overlay div
      "width" : "100%"
    , "height" : "100%" //both lines are to cover entire window
    , "background" : "#000" //set black background
    , "position" : "fixed" //static imposition
    , "top" : "0"
    , "left" : "0" //rest any inherent margins from the browser
    , "zIndex" : "50" //bring div to forefront of page
    , "MsFilter" : "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)"
    , "filter" : "alpha(opacity=60)"
    , "MozOpacity" : 0.6
    , "KhtmlOpacity" : 0.6
    , "opacity" : 0.6 //all the above are cross-browser compatability commands that will all do the same thing but will be picked up or ignored based on the browser

}).appendTo(document.body); //add this created overlay to the body of the webpage
$("#instructPopup").show();
$('#close').click(function(){
	$("#instructPopup").remove();
	$("#overlay").remove();
});
var wins = "";
var lossses = "";
var goal = "";
var score = "";
var crystals = [];
var		crys = crystals[0];
var		crys2 = crystals[1];
var		crys3 = crystals[2];
var		crys4 = crystals[3];


function game (){
	
	// function randomizer() {
		goal = 
			Math.floor(Math.random() * (120 - 19 + 1)) + 19;
			console.log(goal);
		for (var i = 0; i < 4; i++) {
			do	{var value = Math.floor(Math.random() * (12)) + 1;}
		 	while(crystals.indexOf(value) !== -1 ) 
			crystals.push(value);
		}
		return crystals;
} game(goal, crystals); 
console.log(crystals);
console.log(crys);
console.log(crys2)
// 	}
// }

		

			// 		}

// 			}
// 		crysArray.push(crys1)
// 		crys2 = 
// 			Math.floor(Math.random() * (12 - 1 + 1)) + 1;
// 			if ()
// 		console.log(crys2);
// 		crys3 = 
// 			Math.floor(Math.random() * (12 - 1 + 1)) + 1;
// 		console.log(crys3);
// 		crys4 = 
// 			Math.floor(Math.random() * (12 - 1 + 1)) + 1;
// 		console.log(crys4);

// 	}
// 	randomizer();
// debugger;
// 	document.onkeyup = function(event) {
// 		console.log('event*******',event)
// 		if (letters.indexOf(event.key) != -1){
// 			var userInput = String.fromCharCode(event.keyCode).toLowerCase();
// 			var pastInputs = document.getElementById('pastInputs');

// 				if (userInput == computerGuess){
// 					var audio = new Audio("../week-3-game/assets/images/Oh-Yeah.mp3");
// 					audio.play();
// 					alert("WINNAH!!!");
// 					var winCt = document.getElementById('winCt');
// 					winCt.innerHTML = wins++;
// 					pastGuess = "";
// 					pastInputs;
// 	            	pastInputs.innerHTML = pastGuess;		
// 					game();
// 				}else if (userInput != computerGuess && guesses > 0) {
// 					guessCntr;
// 		//For some reason, the user technically has 10 chances instead of 9 because the first keypress does not actual bring down the counter, Did not have time to investigate further.
// 					guesses--
// 					guessCntr.innerHTML = guesses;
// 		            pastGuess += userInput + ", ";
// 		            pastInputs;
// 	            	pastInputs.innerHTML = pastGuess;
		              			 
// 				}else if (guesses == 0) {
// 					guessCntr;
// 					guessCntr.innerHTML = guesses--;
// 					pastGuess = "";
// 					pastInputs;
// 	            	pastInputs.innerHTML = pastGuess;
// 	            	//the popups seem to be superseding the commands above it. I could not figure out how to force execution order
// 						alert("You lose!");
// 						confirm("Try again, child?");
// 					if (true) {
// 					var lossCt = document.getElementById('lossCt')
// 					lossCt.innerHTML = losses++;
// 					game();
// 					}
// 				}
// 			}}

// game();

});