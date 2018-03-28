// Global variables
var alphabet = ["a", "b", "c", "d", "e", "f,", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
let guesses = 10;

var container = document.querySelector(".container");

// random letter function
function generateLetter() {
    console.log("newLetterGenerated");
   return alphabet[Math.floor(Math.random() * alphabet.length)];
    
}

// generating random letter
var computerGuess = generateLetter();
console.log(computerGuess);

document.querySelector(".userInput").addEventListener("keypress", function (e) {


    var userGuess = e.key.toLowerCase();;
   

    if (guesses > 1) {
        if (computerGuess === userGuess) {
            alert("You won!")
            wins++;
           computerGuess = generateLetter();
           console.log(computerGuess);
            guesses = 10;
        } else {
            guesses--;
        }
        document.querySelector(".userInput").value = "";

    } else {
        losses++;
        computerGuess = generateLetter();
        console.log(computerGuess);
        guesses = 10;

    }
    document.querySelector(".userInput").value = "";
    var html =
    `<p> Guesses ${guesses} </p>
    <p> Wins ${wins}</p>
    <p> Losses ${losses}</p>`;

    container.innerHTML = html



});