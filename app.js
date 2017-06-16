//create needed global variables

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var wrongGuesses = [];
var computerChoice = "";
var userChoice = "";

//the computre picks a letter, the user picks a letter of the alphabet. 

function computerMakesChoice() {

	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
	var randomIndex = alphabet[Math.floor(Math.random() * alphabet.length)];
	console.log('randomIndex' , randomIndex);


	computerChoice = [randomIndex];
	console.log('computerChoice', computerChoice);
	return computerChoice;
}



computerMakesChoice();


	document.onkeyup = function(event) {
		console.log('event', event);
		userChoice = event.key;
		console.log('userChoice1', userChoice);
		
	




	// console.log('userChoice2', userChoice)

	if (userChoice === computerChoice) {
		wins++;
		// console.log()
		var victories = document.getElementById("dubs");
		victories.innerHTML = wins;
	}
	else if (guessesLeft === 0) {
		losses++;
		// console.log()
		var shortcomings = document.getElementById("failures");
			shortcomings.innerHTML = losses;
			 guessesLeft = 10;

	}
	else {
		guessesLeft--;
		var attempts = document.getElementById("attempts");
			attempts.innerHTML = guessesLeft;
	}
}



	





	// var html = "<p> Win counter </p>" + "<p>wins: " + wins + "</p>" + "<p>losses: " + losses + "</p>";

	


//Check win condition
//Then we need to compare the two.



//if they match, user wins
//increment wins counter
//restart game


//if they don't match, 
	//the number of guesses remaining decreases
	//push the wrong letter guessed into array of wrong guesses
	
		// else,if the user has 0 guesses left, user loses


//increment losses
//restart 

