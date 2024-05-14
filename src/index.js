// random - Math.floor(Math.random()*3)
choices = ["rock", "paper", "scissors"];
const displayPlayer = document.getElementById("displayPlayer");
const displayComputer = document.getElementById("displayComputer");
const displayResult = document.getElementById("displayResult");
const displayPlayerScore = document.getElementById("displayPlayerScore");
const displayComputerScore = document.getElementById("displayComputerScore");
let computerScore = 0;
let playerScore = 0;


function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*3)];
    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!"
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!"
                break;
        }
    }

    displayPlayer.textContent = `PLAYER: ${playerChoice}`
    displayComputer.textContent = `COMPUTER: ${computerChoice}`
    displayResult.textContent = result;
    switch(result){
        case "YOU WIN!":
            playerScore += 1;
            displayPlayerScore.textContent = playerScore;
            break;
        case "YOU LOSE!":
            computerScore += 1;
            displayComputerScore.textContent = computerScore;
            break;
    }
    
}