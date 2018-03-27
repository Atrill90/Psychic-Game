var alphabet = [ "a", "b", "c", "d", "e", "f,", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
let guesses = 10;

var container = document.querySelector(".container");




var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerGuess);

document.querySelector(".userInput").addEventListener("keypress", function(e){
 var   html = 
    `<p> guesses ${guesses} </p>
    <p> wins ${wins}</p>
    <p> losses ${losses}</p>`;

    var userGuess = e.key;
    console.log(wins);
    if (guesses > 0 ) {
        if (computerGuess === userGuess) {
            wins++;
            console.log(wins);
            guesses = 10;
            document.querySelector(".userInput").value = "";
            container.innerHTML = html
        }else{
            guesses--;
            document.querySelector(".userInput").value = "";
            container.innerHTML = html
        }
    }else{
        losses++;
        guesses = 10;
        container.innerHTML = html
        
    }
     
});
















