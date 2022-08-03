
//buttons
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors")

// result of each match
let result = document.getElementById("result")

//final result
let finalResult = document.querySelector(".finalResult")

//score
let computerScore = 0;
let userScore = 0;

//score output 
let computerSpanScore = document.getElementById("computer-score");
let userSpanScore = document.getElementById("user-score");

// computer chose
let compSpanChoice = document.getElementById("comp")

// random computer choice
const options = ["rock", "paper", "scissors"];

function computerPlay() {
   return options[Math.floor(Math.random() * options.length)]
}

let computerSelection = computerPlay()

// event listeners to buttons
rock.addEventListener("click", () => {
    playGame("rock", computerPlay())
    
})
paper.addEventListener("click", () => {
    playGame("paper", computerPlay())
    
})
scissors.addEventListener("click", () => {
    playGame("scissors", computerPlay())
    
})

// event listener for reset button
let resetButton = document.getElementById("reset")
resetButton.addEventListener("click", restart)

//game with computer
function playGame(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "rock") {
        userScore++;
        result.textContent = `Yaay you won! ${playerSelection} beats ${computerSelection}`;
        // user wins
    } else if( playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        // computer wins
        result.textContent = `You lost :( ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection === computerSelection) {
        result.textContent = "It's a tie";
    } else {
        result.textContent = "Invalid input";
    }
    compSpanChoice.textContent = `${computerSelection}`
    computerSpanScore.textContent = `${computerScore}` 
    userSpanScore.textContent = `${userScore}`
    win()
}


function win() {
    if(userScore === 5) {
        finalResult.textContent = "You won the round :)"
    } else if(computerScore === 5) {
        finalResult.textContent = "You lost this round :("
    } 
}

// restart button
function restart() {
    compSpanChoice.textContent = "";
    result.textContent = "";
    finalResult.textContent = "";
    userSpanScore.textContent = `${0}`
    computerSpanScore.textContent = `${0}` 
}