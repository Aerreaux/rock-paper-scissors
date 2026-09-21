// Game Logic
// Player enters rock, paper, or scissors
// Computer makes choice of rock paper or scissors
// Winner is evaluated
// Statement printed " winner is (computer or human) because (choice) beats (choice)
// Game ends

function getComputerChoice(){
   const choice = Math.floor(Math.random()*10);
   if (choice >= 7){
    return ("ROCK");
   } else if(choice >= 3 && choice < 7){
    return ("PAPER");
   } else if(choice >=0 && choice < 3) {
    return ("SCISSOR");
   }  
}

// console.log(getComputerChoice());

function getHumanChoice(){
    const choice = prompt("Enter 'Rock', 'Paper, or 'Scissor'","Choose wisely...");
    if(choice == null){
        console.log("Cowards never begin, and thus they cannot win. Let's see what the machine would have selected...");
    } else {
    return (choice.toUpperCase());
    }
    
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("The human has selected: " + humanChoice);
    console.log("The Machine has selected: " + computerChoice);

    if(humanChoice == "SCISSOR" && computerChoice == "SCISSOR"){
        console.log ("This is a scissor draw. NO POINT FOR ANYONE!");
    } else if(humanChoice == "SCISSOR" && computerChoice == "PAPER"){
        console.log ("YOU SLICE THAT PAPER! YOU WIN THIS ROUND!");
        humanScore = humanScore + 1;
    } else if(humanChoice == "SCISSOR" && computerChoice == "ROCK"){
        console.log ("CRUSHED LIKE THE WEAKLING YOU ARE! ROCK IS SUPERIOR, LOSER!");
        computerScore = computerScore + 1;
    } else if(humanChoice == "ROCK" && computerChoice == "ROCK"){
        console.log ("Draw a rock! No... This is a rock draw. NO POINTS FOR ANYONE!");
    } else if(humanChoice == "ROCK" && computerChoice == "SCISSOR"){
        console.log ("Somehow, metal is weaker than stone... You win!");
        humanScore = humanScore + 1;
    } else if(humanChoice == "ROCK" && computerChoice == "PAPER"){
        console.log ("Enveloped in an envelope made of dead tree... A perfect coffin for you, LOSER!");
        computerScore = computerScore + 1;
    } else if(humanChoice == "PAPER" && computerChoice == "ROCK"){
        console.log ("Phew! ROCK IS NOT SUPERIOR! CENA DE POLLO!");
        humanScore = humanScore + 1;
    } else if(humanChoice == "PAPER" && computerChoice == "PAPER"){
        console.log ("Paper Draw. No, you draw on paper...Hmm either way, no one wins.");
    } else if(humanChoice == "PAPER" && computerChoice == "SCISSOR"){
        console.log ("SLICED! SCISSOR IS SUPERIOR, LOSER!");
        computerScore = computerScore + 1;
    } else {
        console.log ("There are only three options, how did you fuck this up? Point for your enemy...loser!");
        computerScore = computerScore + 1;
    }
console.log ("Your Score: " + humanScore);
console.log ("Computer Score: " + computerScore);
}

function playGame(){
    const hRoundOne = getHumanChoice();
    const cRoundOne = getComputerChoice();
    playRound(hRoundOne,cRoundOne);

    const hRoundTwo = getHumanChoice();
    const cRoundTwo = getComputerChoice();
    playRound(hRoundTwo,cRoundTwo);

    const hRoundThree = getHumanChoice();
    const cRoundThree = getComputerChoice();
    playRound(hRoundThree,cRoundThree);

    const hRoundFour = getHumanChoice();
    const cRoundFour = getComputerChoice();
    playRound(hRoundFour,cRoundFour);

    const hRoundFive = getHumanChoice();
    const cRoundFive = getComputerChoice();
    playRound(hRoundFive,cRoundFive);

    console.log("After five rounds...")
    if(humanScore > computerScore){
        console.log("You've bested the machine!");
    } else {
        console.log("You must realize you will never vanquish the machines!");
    }
}

playGame();


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);