document.addEventListener('DOMContentLoaded', () => {
  let computerScore = 0;
  let humanScore = 0;

  function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    if (humanChoice === computerChoice) {
      message.textContent = 'It is a draw';
    } else if (
      (humanChoice === 'Scissors' && computerChoice === 'Paper') ||
      (humanChoice === 'Paper' && computerChoice === 'Rock') ||
      (humanChoice === 'Rock' && computerChoice === 'Scissors')
    ) {
      message.textContent = 'You win';
      humanScore += 1;
    } else {
      message.textContent = 'You lost... PC Wins';
      computerScore += 1;
    }

    if (humanScore == 5) {
      message.textContent == 'You won the game!';
      disableButtons();
    } else if (computerScore == 5) {
      message.textContent == 'PC won the game';
      disableButtons();
    }

    updateScore();
  }

  // function for updating score
  function updateScore() {
    score.textContent = `Your score is: ${humanScore} | PC score is: ${computerScore}`;
  }

  // function for disabling buttons once one player reaches 5 points
  function disableButtons() {
    button.style.display = 'none';
  }

  // The main container for the game
  const mainContent = document.getElementById('content');

  // Score display element
  const score = document.createElement('div');
  score.textContent = `Your score is: ${humanScore} | PC score is: ${computerScore}`;

  // Button elements for each choice
  const choices = ['Rock', 'Paper', 'Scissors'];
  choices.forEach((choice) => {
    const button = document.createElement('button');
    button.textContent = choice;

    // Event listener for the buttons
    button.addEventListener('click', () => playRound(choice));

    // Append the button to the main container
    mainContent.appendChild(button);
  });

  // Result message
  const message = document.createElement('h1');

  mainContent.appendChild(score);
  mainContent.appendChild(message);
});
