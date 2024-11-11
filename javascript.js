var score = document.querySelector("#score");
var humanScore = document.querySelector("#playerScore");
var computerScore = document.querySelector("#computerScore");

var gameWinner = document.createElement("h3");
var roundWinner = document.createElement("h2");
var restartGame = document.createElement("button");
restartGame.textContent = "Restart Game";

restartGame.addEventListener("click", () => {
    humanScore.textContent = 0;
    computerScore.textContent = 0;
    gameWinner.textContent = "";
    roundWinner.textContent = "";
});

var rock = document.querySelector("#rock");
var paper = document.querySelector("#paper");
var scissors = document.querySelector("#scissors");

let humanWin = 0;
let computerWin = 0;

function computerChoice() {
    let computerChoice = Math.floor(Math.random() * Math.floor(3));
    if (computerChoice == 0) return "rock";
    if (computerChoice == 1) return "paper";
    return "scissors";
}

let humanChoice;
rock.addEventListener("click", () => {
    humanChoice = "rock";
    PlayGame();
})
paper.addEventListener("click", () => {
    humanChoice = "paper";
    PlayGame();
})
scissors.addEventListener("click", () => {
    humanChoice = "scissors";
    PlayGame();
})

function playRound(humanChoice, compChoice) {
    if ((humanChoice == "rock" && compChoice == "scissors") || 
        (humanChoice == "paper" && compChoice == "rock") ||
        (humanChoice == "scissors" && compChoice == "paper")
        ) {
            humanWin++;
            humanScore.textContent = humanWin;
            roundWinner.textContent = "You Win!";
    } else if ((humanChoice == "rock" && compChoice == "paper") || 
               (humanChoice == "paper" && compChoice == "scissors") || 
               (humanChoice == "scissors" && compChoice == "rock")
               ) {
            computerWin++;
            computerScore.textContent = computerWin;
            roundWinner.textContent = "You Lose!";
        } else {
            roundWinner.textContent = "It was a draw!";
        }
        score.appendChild(roundWinner);
}

function PlayGame() {
    let compChoice = computerChoice();
    playRound(humanChoice, compChoice);

    if (humanWin === 5) {
        gameWinner.textContent = "You WON the game!";
        humanWin = 0;
        computerWin = 0;
        score.appendChild(gameWinner);
        score.appendChild(restartGame);
    } else if (computerWin === 5) {
        gameWinner.textContent = "Computer has won the game!"
        humanWin = 0;
        computerWin = 0;
        score.appendChild(gameWinner);
        score.appendChild(restartGame);
    }

    score.appendChild(gameWinner);
}    