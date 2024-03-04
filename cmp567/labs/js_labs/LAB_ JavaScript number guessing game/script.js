// Your solution goes here 
function playGuessingGame(numToGuess,totalGuesses=10){
    let gameOn = true
    let guesses = 0
    let guess = prompt("Enter a number between 1 and 100.");
    while(gameOn){
        while(isNaN(guess)){
            if(guess.length ==0){
                return 0
            } else{
                guess = prompt("Please enter a number.")
            }
        }
    totalGuesses --;
    guesses ++;
    if(parseInt(guess) == parseInt(numToGuess)){
        return guesses;
    } else if (totalGuesses==0) {
        return 0
    } else if (parseInt(guess) < parseInt(numToGuess)){
        guess = prompt(guess + " is too small. Guess a larger number.");
    } else if (parseInt(guess) > parseInt(numToGuess)){
        guess = prompt(guess + " is too large. Guess a smaller number.")
    }

    }
} 