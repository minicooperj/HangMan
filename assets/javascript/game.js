		//Set up Global Vars
			var hangWords  = ["blondie", "morrissey", "devo", "inxs", "eurhythmics", "New Order", "Dead Kennedies", "X-Ray Spex"];	

			var placeholderDiv = document.getElementById("placeholders");				

			var letterCount;

			var guessCount = 12;
		// Function to choose random word 
			function pickWord(array) {
				return hangWords[Math.floor(Math.random() * hangWords.length)]
								};
			var word = pickWord();

			var keyPressed;

		// var answerArray = setupAnswerArray(word);
		// 	for (var i = 0; i < word.length; i++) {
		// 		answerArray[i] = "_";};	

		// Function to create Placeholder Array
		 function setupAnswerArray() {	
		 		var answerArray=[];
		 		// Optional to create new div for _ _ _ 
		 		// var newDiv = document.createElement("div"); 
			 	// placeholderDiv.appendChild(newDiv);  
				 for (var i = 0; i <word.length; i++){
				 	if (word[i] === " ") {
				 		answerArray[i] = "  ";		
				 	}
				 	else if (word[i] === "-") {
				 		answerArray[i] = " - ";
				 	}
				 	else {
				 answerArray[i] = " _ ";
				 placeholderDiv.innerHTML = answerArray};
									};
		
		// Function to track if letter is in word, if not, add to guessed letter

		function guessLetter() {
			for (var j = 0; j < word.length; j++) {
				if ( word.indexOf(keyPressed) === -1) {
					
				}

				}




		};


		console.log(word);
		setupAnswerArray();
		

		

		// Check & count letter function 

		// var count = function(string, ch) {
		// 	var counted = 0;
		// 	for (var i = 0; i < string.length; i++) 
		// 		if (string.charAt(i) === ch) {
		// 			counted += 1;
		// 			return counted;
		// 		}
		// }

		// console.log(setupAnswerArray());
			

		// var answerArray = setupAnswerArray();

		// var remainingLetters = word.length;

		// while (remainingLetters > 0) {

		// };


		// function pickWord(array) {
			// return hangWords[Math.floor(Math.random() * hangWords.length)];
		// };

		// function setupAnswerArray(word) {
		// 	for (var i = 0; i < word.length; i++) {
		// 		return word[i] = "_";}

		// };



		




// 		// Array of HansetupAnswerArrayd/ 		// Function to select random word from array

// 		var word = words[Math.floor(Math.random()*words.length)];

// 		var answerArray = [];
// 			for (var i = 0; i < word.length; i++) {
// 				answerArray[i] = "_";
// 			};

// 		var remainingLetters = word.length;

// 		while (remainingLetters >0 ) 

// 		{
// 			alert(answerArray.join(" "));

// 			var guess = prompt("Guess a letter or cancel to stop.")
// 				if (guess === null) {
// 					break;
// 				} else if (guess.length !== 1) {
// 					alert("Please enter one letter");
// 				} else {
// 					//Update game with guess
// 					for (var j = 0; j < word.length; j++) {
// 						if (word[j] === guess) {
// 						answerArray[j] = guess;
// 						remainingLetters--;}
// 						}
						
// 		}
//     // The end of the game loop
// }


//     // Show the answer and congratulate the player

//     alert(answerArray.join(" "));

//     alert("Good job! The answer was " + word);

// 		// randomWord: function randomWord() {
			
// 		// 	var word = hangMan.words[Math.floor(Math.random()*hangMan.words.length)];
// 		// 	console.log(word);
// 		// 	for(var i =0; i < word.length; i++){
// 		// 		var placeholder = document.getElementById("placeholders");
// 		// 		var letter = document.createTextNode(word[i]);
// 		// 		placeholder.appendChild(letter);
// 		// 	}
// 		// 		},

// 		// // Function to print placeholders _ _ _ for chosen word
// 		// placeHolder: function placeHolder() {	} 

// 		// console.log(word);
// 		// console.log(answerArray);