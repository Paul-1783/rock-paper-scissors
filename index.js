function getComputerChoice() {
  let randomValue = Math.floor(Math.random() * 3) + 1;
  return randomValue === 3
    ? "rock"
    : randomValue === 2
    ? "paper"
    : randomValue === 1
    ? "scissors"
    : "logical error in randomValue calculation";
}

function getHumanChoice() {
  let userInput = prompt(
    "Which one do you want to play: 'rock', 'paper' or 'scissors'?"
  ).toLocaleLowerCase();
  while (
    userInput != "rock" &&
    userInput != "paper" &&
    userInput != "scissors"
  ) {
    userInput = prompt(
      "Entry was not valid, try again. Which one do you want to play: 'rock', 'paper' or 'scissors'?"
    ).toLocaleLowerCase();
  }
  return userInput;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(hc, cc) {
    if (cc === hc) {
      alert("Draw!");
    } else if (cc === "scissors") {
      if (hc === "paper") {
        alert(`You lose! ${cc} beats ${hc}`);
        computerScore++;
      } else {
        alert(`You win! ${hc} beats ${cc}`);
        humanScore++;
      }
    } else if (cc === "paper") {
      if (hc === "rock") {
        alert(`You lose! ${cc} beats ${hc}`);
        computerScore++;
      } else {
        alert(`You win! ${hc} beats ${cc}`);
        humanScore++;
      }
    } else {
      if (hc === "scissors") {
        alert(`You lose! ${cc} beats ${hc}`);
        computerScore++;
      } else {
        alert(`You win! ${hc} beats ${cc}`);
        humanScore++;
      }
    }
  }

  let i = 0;
  while (i < 5) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    ++i;
  }
  alert(`Final Score: Computer ${computerScore}, Human ${humanScore}`);
}

playGame();
