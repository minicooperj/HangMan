

		// Array of Hangman Words
		var words = ["blondie", "morrissey", "devo", "inxs", "eurhythmics"];

		// Function to select random word from array

		var word = words[Math.floor(Math.random()*words.length)];

		var answerArray = [];
			for (var i = 0; i < word.length; i++) {
				answerArray[i] = "_";
			};

		var remainingLetters = word.length;

		while (remainingLetters >0 ) 

		{
			alert(answerArray.join(" "));

			var guess = prompt("Guess a letter or cancel to stop.")
				if (guess === null) {
					break;
				} else if (guess.length !== 1) {
					alert("Please enter one letter");
				} else {
					//Update game with guess
					for (var j = 0; j < word.length; j++) {
						if (word[j] === guess) {
						answerArray[j] = guess;
						remainingLetters--;}
						}
						
		}
    // The end of the game loop
}


    // Show the answer and congratulate the player

    alert(answerArray.join(" "));

    alert("Good job! The answer was " + word);

		// randomWord: function randomWord() {
			
		// 	var word = hangMan.words[Math.floor(Math.random()*hangMan.words.length)];
		// 	console.log(word);
		// 	for(var i =0; i < word.length; i++){
		// 		var placeholder = document.getElementById("placeholders");
		// 		var letter = document.createTextNode(word[i]);
		// 		placeholder.appendChild(letter);
		// 	}
		// 		},

		// // Function to print placeholders _ _ _ for chosen word
		// placeHolder: function placeHolder() {	} 

		// console.log(word);
		// console.log(answerArray);