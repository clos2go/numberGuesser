let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

let generateTarget = () => {
  currentRoundNumber = currentRoundNumber = Math.floor(Math.random() * 10);
  return currentRoundNumber;
};
// console.log(generateTarget());

let compareGuess = (userGuess, cpuGuess, secretNum) => {
  const userDiff = Math.abs(userGuess) - Math.abs(secretNum);
  const cpuDiff = Math.abs(cpuGuess) - Math.abs(secretNum);
  // if (Math.abs(userGuess) - )
  console.log(`user`, userDiff);
  console.log(`cpu`, cpuDiff);
};

compareGuess(2, 9, generateTarget());
