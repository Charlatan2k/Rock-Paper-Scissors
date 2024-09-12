function getComputerChoice() {
  let computerChoice = Math.round(Math.random() * 2 + 1);
  if (computerChoice == 1) {
    computerChoice = 'Rock';
  } else if (computerChoice == 2) {
    computerChoice = 'Paper';
  } else {
    computerChoice = 'Scissors';
  }
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt('Choose Rock Paper or Scissors');
  humanChoice.charAt(0).toUpperCase();
  return humanChoice;
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;
  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      alert('It is a draw');
    } else if (
      (humanChoice == 'Scissors' && computerChoice == 'Paper') ||
      (humanChoice == 'Paper' && computerChoice == 'Rock') ||
      (humanChoice == 'Rock' && computerChoice == 'Scissors')
    ) {
      alert('You win!');
      humanScore += 1;
    } else if (
      (computerChoice == 'Rock' && humanChoice == 'Scissors') ||
      (computerChoice == 'Paper' && humanChoice == 'Rock') ||
      (computerChoice == 'Scissors' && humanChoice == 'Paper')
    ) {
      alert('You lost.. PC wins');
      computerScore += 1;
    } else {
      alert('Please right a valid choice');
    }
    alert('Your score is:' + humanScore + 'PC score is :' + computerScore);
  }
  playRound();
  playRound();
  playRound();
  playRound();
}

playGame();
