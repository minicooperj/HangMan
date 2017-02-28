		//Set up Global Vars
			var hangWords  = ["blondie", "morrissey", "devo", "inxs", "eurhythmics", "New Order", "dead kennedies", "X-Ray Spex"];	

			var placeholderDiv = document.getElementById("placeholders");	

			var letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];			

			var letterCount;

			var guessCount = 7;
		// Function to choose random word 
			
			var currentWord;

			var currentWordFull;

			var keyPressed;

			var guessedLetters = document.getElementById("guessedLetters");

			var usedLetters;

			var resultMatches = [];

			var wins = 0;


			// Function to select word from hangWords array
		function wordSelect (array) {
    	var num = Math.floor(Math.random() * (array.length));
    	var word = array[num];
   		 return word;
 									 }


		// Function to create Placeholder Array
		function setWordToBeGuessed(){
			currentWord;
			currentWordFull;
			usedLetters = [];
			usedLetters.length = 0; // clear used letters array
	   		currentWordFull = wordSelect(hangWords); // var for upper case conversion
	   		
	    	//set an all upper case version of the current word
	   		currentWord = currentWordFull.toUpperCase();
	    
	    	//creates blocks in the DOM indicating where there are letters and spaces
		   	currentWord.split("").map(function(character) {
	    	
	    	var guessWordBlock = document.getElementById("placeholders");

	      	var domElem = document.createElement("div");

	      	if (character.match(/[a-z]/i)) {
	        domElem.className = "character-block is-letter";

	      } else {
	        domElem.className = "character-block";
	      }

	      guessWordBlock.appendChild(domElem);
    	});
  			}
		

        document.onkeyup = function GetChar (event){
            	var keyCode = ('which' in event) ? event.which : event.keyCode;
            	keyPressed = String.fromCharCode(keyCode).toUpperCase();
            		console.log(keyPressed);
            		if (event.keyCode >= 65 && event.keyCode <= 90 && usedLetters.indexOf(keyPressed) === -1) {
            		     			
           			handlePickedLetter(keyPressed);
        			usedLetters.push(keyPressed);
        			keyPressed;
           	 		} else if (event.keyCode >= 65 && event.keyCode <= 90 && usedLetters.indexOf(keyPressed) >= 0) {
        	 			console.log("You already selected this letter. Check below.")
        	 			keyPressed;
        	 		}
          
    
        };

        function handlePickedLetter(keyPressed) {
        	var resultMatches = [];
        	var ind = currentWord.indexOf(keyPressed);

        	 // if letterPicked matches one or more letters in the current word
   			 // push all instances of that letter to resultMatches
    		while (ind !== -1) {
      		resultMatches.push(ind);
      		ind = currentWord.indexOf(keyPressed, ind +1);
    							}

    		//if resultMatches is greater than 0 proceed to place them in the dom
    		if (resultMatches.length > 0) {
      		var letterBlocks = document.getElementsByClassName("is-letter");
      		resultMatches.map(function(num) {

        	var domElem = document.createElement("span");
        	domElem.innerHTML = currentWordFull[num].toUpperCase();
        	letterBlocks[num].appendChild(domElem);
        	winMessage();
        

    	  });
    		//if letterBlock is not greater than 0 put the letter in the graveyard
    		} else {
	      var domElem = document.createElement("div");
	      domElem.className = "guessed-letter";
	      domElem.innerHTML = keyPressed;
	      document.getElementById("guessedLetters").appendChild(domElem);
	      wrongGuess();


	    }
	  }

 	function wrongGuess() {
				guessCount = guessCount-1;
				if (guessCount === 0) {
					alert("You're dead");
					
				};
			}

	function winMessage(){
   				 var correctlyGuessedLettersCount = $(".is-letter > span").length;
   				 if (correctlyGuessedLettersCount === currentWord.length) {
   				 	
   				 	wins = wins + 1;
   				 	$("#winNumber").html(" " + wins + " ");

   				 	alert("You win");

     			 	removeguessedLetters();
     			 	removeCorrectlyGuessedLetters();
     			 	removeFillInTheBlanksAroundOldWord();	   			 	
       			 	setWordToBeGuessed();
       			 	keyPressed = 0;
     			 	
    			};	
  			}

  		function removeguessedLetters(){
   				 	$('#guessedLetters > div').each(function(index, element){
      				$(element).remove();});
      			 	}

  		function removeCorrectlyGuessedLetters(){
				    $('#placeholders').each(function(index, element){
				      $(element).children().html('');
				    });
				  	}

		function removeFillInTheBlanksAroundOldWord(){
				    $("#placeholders").html('');
				  	};

	 // Gets Link for Theme Song
      var audioElement = document.createElement("audio");
      audioElement.setAttribute("src", "Assets/captainplanet24.mp3");
		
setWordToBeGuessed();
// handlePickedLetter();
	
		

		

		