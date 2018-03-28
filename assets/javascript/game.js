var alphabet = ["a", "b", "c", "d", "e", "f,", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
let guesses = 10;

var container = document.querySelector(".container");

function generateLetter() {
    console.log("newLetterGenerated");
   return alphabet[Math.floor(Math.random() * alphabet.length)];
    
}


var computerGuess = generateLetter();
console.log(computerGuess);

document.querySelector(".userInput").addEventListener("keypress", function (e) {


    var userGuess = e.key;

    if (guesses > 0) {
        if (computerGuess === userGuess) {
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
    var html =
    `<p> Guesses ${guesses} </p>
    <p> Wins ${wins}</p>
    <p> Losses ${losses}</p>`;

    container.innerHTML = html



});