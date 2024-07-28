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
  let results = document.querySelector(".results");

  function playRound(hc, cc) {
    if (cc === hc) {
      results.textContent = "Draw!";
    } else if (cc === "scissors") {
      if (hc === "paper") {
        results.textContent = `You lose! ${cc} beats ${hc}`;
        computerScore++;
      } else {
        results.textContent = `You win! ${hc} beats ${cc}`;
        humanScore++;
      }
    } else if (cc === "paper") {
      if (hc === "rock") {
        results.textContent = `You lose! ${cc} beats ${hc}`;
        computerScore++;
      } else {
        results.textContent = `You win! ${hc} beats ${cc}`;
        humanScore++;
      }
    } else {
      if (hc === "scissors") {
        results.textContent = `You lose! ${cc} beats ${hc}`;
        computerScore++;
      } else {
        results.textContent = `You win! ${hc} beats ${cc}`;
        humanScore++;
      }
    }
    if (humanScore === 5 || computerScore === 5) {
      results.textContent = `Final Score: Computer ${computerScore}, Human ${humanScore}`;
      humanScore = 0;
      computerScore = 0;
    } else
      results.textContent += `\n\r Score: Computer ${computerScore}, Human ${humanScore}`;
  }

  let buttons = document.querySelector("#buttons");
  buttons.addEventListener("click", (event) => {
    let target = event.target;
    let computerSelection = getComputerChoice();

    switch (target.id) {
      case "paper":
        playRound("paper", computerSelection);
        break;
      case "scissors":
        playRound("scissors", computerSelection);
        break;
      case "rock":
        playRound("rock", computerSelection);
        break;
    }
  });
}

playGame();
