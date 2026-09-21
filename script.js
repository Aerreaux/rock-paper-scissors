// Game Logic
// Player enters rock, paper, or scissors
// Computer makes choice of rock paper or scissors
// Winner is evaluated
// Statement printed " winner is (computer or human) because (choice) beats (choice)
// Game ends

function getComputerChoice(){
   choice = Math.floor(Math.random()*10);
   if (choice >= 7){
    return ("ROCK");
   } else if(choice >= 3 && choice < 7){
    return ("PAPER");
   } else {
    return ("SCISSOR");
   }  
}

// console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("Enter 'Rock', 'Paper, or 'Scissors'","Choose wisely...");
    return (choice.toUpperCase());
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "SCISSOR" && computerChoice === "SCISSOR"){
        console.log ("This is a scissor draw. NO POINT FOR ANYONE!");
    } else if(humanChoice === "SCISSOR" && computerChoice === "PAPER"){
        console.log ("YOU SLICE THAT PAPER! YOU WIN THIS ROUND!");
        humanScore = humanScore + 1;
    } else if(humanChoice === "SCISSOR" && computerChoice === "ROCK"){
        console.log ("CRUSHED LIKE THE WEAKLING YOU ARE! ROCK IS SUPERIOR, LOSER!");
        computerScore = computerScore + 1;
    } else if(humanChoice === "ROCK" && computerChoice === "ROCK"){
        console.log ("Draw a rock! No... This is a rock draw. NO POINTS FOR ANYONE!");
    } else if(humanChoice === "ROCK" && computerChoice === "SCISSOR"){
        console.log ("Somehow, metal is weaker than stone... You win!");
        humanScore = humanScore + 1;
    } else if(humanChoice === "ROCK" && computerChoice === "PAPER"){
        console.log ("Enveloped in an envelope made of dead tree... A perfect coffin for you, LOSER!");
        computerScore = computerScore + 1;
    } else if(humanChoice === "PAPER" && computerChoice === "ROCK"){
        console.log ("Phew! ROCK IS NOT SUPERIOR! CENA DE POLLO!");
        humanScore = humanScore + 1;
    } else if(humanChoice === "PAPER" && computerChoice === "PAPER"){
        console.log ("Paper Draw. No, you draw on paper...Hmm either way, no one wins.");
    } else if(humanChoice === "PAPER" && computerChoice === "SCISSOR"){
        console.log ("SLICED! SCISSOR IS SUPERIOR, LOSER!");
        computerScore = computerScore + 1;
    } else {
        console.log ("There are only three options. How did you fuck up?");
    }
console.log ("Your Score: " + humanScore);
console.log ("Computer Score: " + computerScore);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);