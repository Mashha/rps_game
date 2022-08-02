//console game
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//score
let computerScore = 0;
let userScore = 0;
// random computer choice

const options = ["rock", "paper", "scissors"];

//random computer choice
function computerPlay() {
   return options[Math.floor(Math.random() * options.length)]
}
let computerSelection = computerPlay()


// game with computer
function playGame(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "scissors" || playerSelection.toLowerCase() === "scissors" && computerSelection === "paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        userScore++;
        return `Yaay you won! ${playerSelection} beats ${computerSelection}`;
        // user wins
    } else if( playerSelection.toLowerCase() === "rock" && computerSelection === "paper" || playerSelection.toLowerCase() === "scissors" && computerSelection === "rock" || playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore++;
        // computer wins
        return `You lost :( ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie";
    } else {
        return "Invalid input";
    }
    
}

// five rounds with computer
function round() {
    for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("what do you choose");

    console.log(`Computer chose: ${computerSelection}`)
    console.log(`Player chose: ${playerSelection}`)
    
    console.log(playGame(playerSelection, computerSelection))

    console.log(`Computer score: ${computerScore} and user score: ${userScore}`)
    
    }
    console.log(win())

}

round()


function win() {
    if(userScore > computerScore) {
        return "You won the round :)"
    } else if(computerScore > userScore) {
        return "You lost this round :("
    } else {
        return "It's a tie, play one more"
    }
}