var possibleWord = ["dragon", "westeros", "khaleesi", "dothraki", "winterfell", "wildling", "stark", "lannister"];

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 1;
var guesses = 15;

var lettersGuessed = [];
var winCheck = "";

var answer = [];
var correctLetters = [];


var computerChoice = possibleWord[Math.floor(Math.random() * possibleWord.length)];
console.log(computerChoice);

var gameSet = function () {

if (computerChoice === "dragon") {
    answer = ["_ ", "_ ", "_ ", "_ ", "_ ", "_ "];
    correctLetters = ["d", "r", "a", "g", "o", "n"];
}
if (computerChoice === "westeros") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    correctLetters = ["w", "e", "s", "t", "e", "r", "o", "s"];
}
if (computerChoice === "khaleesi") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    correctLetters = ["k", "h", "a", "l", "e", "e", "s", "i"];
}
if (computerChoice === "dothraki") {
    answer =  ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    correctLetters = ["d", "o", "t", "h", "r", "a", "k", "i"];
}
if (computerChoice === "winterfell") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    correctLetters = ["w", "i", "n", "t", "e", "r", "f", "e", "l", "l"];
}
if (computerChoice === "wildling") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    correctLetters = ["w", "i", "l", "d", "l", "i", "n", "g"];
}
if (computerChoice === "stark") {
    answer = ["_ ", "_ ", "_ ", "_ ", "_ "];
    correctLetters = ["s", "t", "a", "r", "k"];
}
if (computerChoice === "lannister") {
    answer = ["_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ ","_ "];
    correctLetters = ["l", "a", "n", "n", "i", "s", "t", "e", "r"];
}


document.getElementById("word-blanks").textContent = answer.join("");


}

gameSet();


//create a for loop here to create answer variables to replace repeating code


//defining a function to reset the game
var reset = function() {
    computerChoice = possibleWord[Math.floor(Math.random() * possibleWord.length)];
    console.log(computerChoice);
    guesses = 15;
    lettersGuessed = [];
    gameSet();
    document.getElementById("letters-guessed").textContent = "Letters Guessed: " +  lettersGuessed.join(', ');
    document.getElementById("guesses-remain").textContent = "Number of Guesses Remaining: " + guesses;
}


//event: user presses a key to guess a letter and if records to the page under letters guessed
document.onkeyup = function(event) {
    var userGuess = event.key;

    document.getElementById('audiotag1').play();

    if (letters.indexOf(userGuess) === -1 || lettersGuessed.indexOf(userGuess) !== -1 ) {
        alert("Please choose valid key");
        return;
    }
        
    lettersGuessed.push(userGuess);
    guesses--;

    document.getElementById("directions-text").textContent = " ";
    document.getElementById("letters-guessed").textContent = "Letters Guessed: " +  lettersGuessed.join(', ');
    document.getElementById("guesses-remain").textContent = "Number of Guesses Remaining: " + guesses;


    for (var i = 0; i < correctLetters.length; i++) {
        if (userGuess === correctLetters[i]) {

            answer[i] = userGuess;

            winCheck = answer.join("");

            document.getElementById("word-blanks").textContent = winCheck;
        
        };
    };

if (winCheck === computerChoice) {
    alert("You win!");
    reset();
    document.getElementById("number-wins").textContent = "Number of wins: " + wins++;
} 

//If you run out of guesses, alerts that you lose and what the word was
else if (guesses === 0) {
    alert("You Lose! The answer was " + computerChoice + ".");
    reset();
};

};