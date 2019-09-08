var gameTitles = ["mario", "zelda", "donkey kong", "madden", "street fighter", "sonic", "halo", "mortal kombat"]

var letterChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var wins = 0;

var Guesses = 12;

var lettersGuessed = []

var computerChoice = gameTitles[Math.floor(Math.random() * gameTitles.length)];

document.onkeypress = function(event) {
    var userGuess = event.key;
    lettersGuessed.push(userGuess)
}
