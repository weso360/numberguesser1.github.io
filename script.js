let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
  const generateTarget = Math.floor(Math.random() * 10);
  return generateTarget;
};

const compareGuesses = (humanG, computerG, targetG) => {
  const humanDifference = Math.abs(targetG - humanG);
  const computerDifference = Math.abs(target - computerG);
  if(humanDifference >= computerDifference){
    return true
  }else{
    return false
  }
};

const updateScore = winner => {
  if (winner === "human") {
    return humanScore++;
  } else if (winner === "computer") {
    return computerScore++;
  }
};

const advanceRound = () =>{ 
  currentRoundNumber++;
}
