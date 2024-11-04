let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            choice = "rock";
            console.log("Computer: " + `${choice}`);
            break;
        case 1:
            choice = "paper";
            console.log("Computer: " + `${choice}`);
            break;
        case 2:
            choice = "scissors";
            console.log("Computer: " + `${choice}`);
            break;
    }
    return choice;
}

function checkChoice(choice) {
    if (choice.toLowerCase() === "scissors" || choice.toLowerCase() === "paper" || choice.toLowerCase() === "rock") {
        console.log("You: " + `${choice}`);
    } else {
        alert("Error! Try again!");
        getHumanChoice();
    }
    return choice;
}

function getHumanChoice() {
    let choice = prompt("What's your choice?");
    checkChoice(choice);
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === "rock" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "scissors")) {
        console.log("It's a draw");
    } else if ((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "paper" && computerChoice === "scissors") || (humanChoice === "scissors" && computerChoice === "rock")) {
        console.log("You lose!");
        computerScore++;
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        console.log("You win!");
        humanScore++;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You won the whole game!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a draw!");
    }
}

playGame();