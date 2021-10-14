// guess b/w 1 and 10
//  1. Generate a random number -> Completed
// Give the user the ability to guess
// if they guess and they are wrong, ask them again (HINT);
// if they win - say that they won

function guessGame() {
  let randomNumber = Math.floor(Math.random() * 11);
  let guess;
  do {
    guess = prompt("GUESS A NUMBER BETWEEN 1 AND 10");
    console.log(guess, randomNumber);
    if (randomNumber > guess) {
      console.log("you guessed too low ");
    } else if (randomNumber < guess) {
      console.log("you guessed too High ");
    }
  } while (guess != randomNumber);
  console.log("you Won ");
}

guessGame();
