
// here we ask user for his/her name
var userName = prompt("What is your name?");

// Alerts the output from our confirm game.
if (userName){
    alert("Good luck " + userName + "!");
}


    var wins = 0;
    var losses = 0;
    var GuessesLeft = 9;
    var lettersGuessed = [];

    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];


    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    console.log(computerGuess);
    // Next, we give JavaScript a function to execute when onkeyup event fires.
    document.onkeyup = function(event) {


    //determines the key and puts it in lower case and assign user guess.
    var userGuess = event.key.toLowerCase();
        console.log(userGuess);

    //logic to determine correct guess.
        if(event.keyCode<=90 && event.keyCode>=65){
            if (userGuess === computerGuess){
                wins++;
                GuessesLeft = 9;
                alert("You won bubba!");
                computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                document.getElementById("Wins").innerText = wins;
                document.getElementById("Guesses").innerText= GuessesLeft;
                location.reload();

            }
            else {
                GuessesLeft --;
                document.getElementById("Guesses").innerText= GuessesLeft;
                lettersGuessed.push(userGuess);
                document.getElementById("YourGuessesSoFar").innerText = lettersGuessed;
                console.log(lettersGuessed);
                location.reload();
            }

               if(GuessesLeft == 0){
                   losses ++;
                   GuessesLeft = 9;
                   computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
                   document.getElementById("losses").innerText = losses;
                   document.getElementById("Guesses").innerText= GuessesLeft;
                   document.getElementById("YourGuessesSoFar").innerText = lettersGuessed;
                   location.reload();

               }



        }


};


