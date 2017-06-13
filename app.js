//create needed global variables

var wins = 0;

var losses = 0;

var guessesLeft = 10;

var wrongGuesses = [];


//the computre picks a letter, the user picks a letter of the alphabet. 

var alphabet = ['a','b','c','d','e','f']
var randomIndex = Math.floor(Math.random() * alphabet.length);
console.log('randomIndex' , randomIndex);

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

