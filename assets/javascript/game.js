// Notes: For some reason the script starts at one less than the remainGuess variable (if i set remainGuess to 9 it'll have 8 guesses remaining). 
// I couldn't get it to reset or stop the game at 0 guesses
var wins = 0;
var losses = 0;
var remainGuess = 10;
var guessed = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var gameAnswer = letters[Math.floor(Math.random()*letters.length)];
var userGuess = null;

console.log("The answer is " + gameAnswer + " you filthy cheater!")

var updateRemain = function() {
    document.querySelector("#remainGuess").innerHTML = "Guesses Left: " + remainGuess;

};

var updateGuessed = function() {
    document.querySelector("#guessed").innerHTML = "Your Guesses so far: " + guessed;

};


updateRemain();
updateGuessed();

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

        remainGuess--;
        
    guessed.push(userGuess);
    updateRemain();
    updateGuessed();

        if (userGuess == gameAnswer){
            wins++;
            document.querySelector("#wins").innerHTML = "Wins: " + wins;
            alert("You win!")

        }

        else if(remainGuess == 0){
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            alert("You lose! Try cheating next time!")
        }
    };

    var x = document.getElementById("captainplanet");

    function playAudio() {
        x.play();
    }

    function pauseAudio() {
        x.pause();
    }

