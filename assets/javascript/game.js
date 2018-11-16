var possibleWord = ["dragon", "westeros", "khaleesi", "dothraki", "winterfell"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var guesses = 15;

var lettersGuessed = [];

var computerChoice = possibleWord[Math.floor(Math.random() * possibleWord.length)];
console.log(computerChoice);

if (computerChoice === "dragon") {
    var answer = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
    var correctLetters = ["d", "r", "a", "g", "o", "n"];
};
if (computerChoice === "westeros") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    var correctLetters = ["w", "e", "s", "t", "e", "r", "o", "s"];
};
if (computerChoice === "khaleesi") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    var correctLetters = ["k", "h", "a", "l", "e", "e", "s", "i"];
};
if (computerChoice === "dothraki") {
    answer =  ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    var correctLetters = ["d", "o", "t", "h", "r", "a", "k", "i"];
};
if (computerChoice === "winterfell") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    var correctLetters = ["w", "i", "n", "t", "e", "r", "f", "e", "l", "l"];
};

document.getElementById("word-blanks").textContent = answer.join("  ");


//defining a function to reset the game
var reset = function() {
    computerChoice = possibleWord[Math.floor(Math.random() * possibleWord.length)];
    console.log(computerChoice);
    guesses = 15;
    lettersGuessed = [];
}


//event: user presses a key to guess a letter and if records to the page under letters guessed
document.onkeyup = function(event) {
    var userGuess = event.key;
        
    lettersGuessed.push(userGuess);
    guesses--;

    document.getElementById("directions-text").textContent = " ";
    document.getElementById("letters-guessed").textContent = "Letters Guessed: " +  lettersGuessed.join(', ');
    document.getElementById("guesses-remain").textContent = "Number of Guesses Remaining: " + guesses;


    for (var i = 0; i < correctLetters.length; i++) {
        if (correctLetters[i] = userGuess) {
            // document.getElementById("word-blanks").textContent = " ";
            // in the line above i want the quotations to take the userGuess, find corresponding index in correctletters and insert this into the corresponding index of answer (delete and insert)
        };
    };

};

