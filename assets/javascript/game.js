		//Set up Global Vars
			var hangWords  = ["blondie", "morrissey", "devo", "inxs", "eurhythmics", "New Order", "Dead Kennedies", "X-Ray Spex"];	

			var placeholderDiv = document.getElementById("placeholders");	

			var letters = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];			

			var letterCount;

			var guessCount = 12;
		// Function to choose random word 
			
			var currentWord;

			var currentWordFull;

			var keyPressed;

			var guessedLetters = document.getElementById("guessedLetters");

			function wrongGuess() {
				guessCount = guessCount-1;
				if (guessCount === 0) {
					alert("You're dead");
					
				};
			}


			function winMessage(){
    var correctlyGuessedLettersCount = $(".is-letter > span").length;
    if (correctlyGuessedLettersCount === currentWord.length) {
      alert("You win")
    };	
  }


		function wordSelect (array) {
    	var num = Math.floor(Math.random() * (array.length - 1));
    	var word = array[num];
   		 return word;
 									 }


		// Function to create Placeholder Array
		function setWordToBeGuessed(){

	   		currentWordFull = wordSelect(hangWords);

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
            
            		if (event.keyCode >= 65 && event.keyCode <= 90) {
            		keyPressed = String.fromCharCode(keyCode).toUpperCase();}
        			
        			console.log(keyPressed);
        			handlePickedLetter(keyPressed);
          
    
        };

        function handlePickedLetter(keyPressed) {
        	var resultMatches = [];
        	var ind = currentWord.indexOf(keyPressed);

        	 // if letterPicked matches one or more letters in the current word
   			 // push all instances of that letter to resultMatches
    		while (ind !== -1) {
      		resultMatches.push(ind);
      		ind = currentWord.indexOf(keyPressed, ind + 1);
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
		
setWordToBeGuessed();
handlePickedLetter();
	
		

		

		