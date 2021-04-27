let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
  currentRoundNumber = currentRoundNumber = Math.floor(Math.random() * 10);
  return currentRoundNumber;
};
// console.log(generateTarget());

let compareGuesses = (userGuess, cpuGuess, secretNum) => {
  const userDiff = Math.abs(userGuess - secretNum);
  const cpuDiff = Math.abs(cpuGuess - secretNum);
  if (userDiff < cpuDiff || userDiff === cpuDiff) {
    return true;
  } else {
    return false;
  }
};

let updateScore = (winner) => {
  if ((winner = "human")) {
    humanScore++;
  } else {
    computerScore++;
  }
};

let advanceRound = () => {
  currentRoundNumber++;
};

compareGuesses(2, 9, generateTarget());
