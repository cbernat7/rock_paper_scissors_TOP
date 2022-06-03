// rock paper scissors player vs comp
let playerInput = ""; //player input
let computerMove = ""; //computer's random move
let gameResult = ""; //game result statement
let youTied = "You Tied!";
let playerScore = 0;  //beginning score
let computerScore = 0; //beginning score
let clickCount = 0;
const resultsDiv = document.querySelector('.resultsContainer');
const compResults = document.querySelector('.computerResults');
const playerResults = document.querySelector('.playerResults');
const textResult = document.querySelector('.textResult');
const pScoreDiv = document.querySelector('.playerScore');
const cScoreDiv = document.querySelector('.computerScore');




// function playerPlay () { //prompt for payer to enter move
//   playerInput = prompt("Enter your play (rock, paper, or scissors):", "rock"); //default 'rock'
//   playerInput = playerInput.toLowerCase();
//   if (playerInput === "rock"||"paper"||"scissors"){
//     console.log(`You played: ${playerInput}`);
//     return playerInput;
//   }
//   else{
//     alert("Not a valid move. Please type: rock, paper, or scissors");
//     playerPlay();
//   }
   
// }

function computerPlay(){ //randomly return number 0-2 and assign each value of rock, paper, or scissors
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0){ //rock
    computerMove = 'rock';  
  } else if (randomNum === 1) { //paper
    computerMove = 'paper'; 
  } else { //scissors
    computerMove = 'scissors';
 }
return computerMove;

}

// let youWin = `You Win! ${playerInput} beats ${computerMove}!`; //you win statement
// let youLose = `You Lose! ${computerMove} beats ${playerInput}!`; //you lose statement

function playRound() { //one round of the game
  computerPlay();
  compResults.innerText = `Computer played ${computerMove}`;
 
  if (playerInput == "rock" && computerMove == "paper" ||   //lose conditions
  playerInput == "scissors" && computerMove == "rock" || 
  playerInput === "paper" && computerMove === "scissors"){
  gameResult = `You Lose! ${computerMove} beats ${playerInput}!`;  //change gameResult statement
  } else if (playerInput === computerMove) { //tie
  gameResult = youTied; 
  } else {
  gameResult =`You Win! ${playerInput} beats ${computerMove}!`;  //change gameResult statement
  }   
  console.log(`you played ${playerInput}`);
  console.log(`computer played ${computerMove}`);
  textResult.innerText = gameResult;
  keepScore();
  if (clickCount === 5){
    finalScore()
  }
  return gameResult;
}



const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // alert(button.id);
    playerInput = button.id;
    game();
    playerResults.innerText = `You played ${playerInput}`;
    clickCount+=1;
   

    
  })
});


function finalScore() { //function for end of round scores
  resultsDiv.innerText = `Final results Player: ${playerScore}, Computer: ${computerScore}`;
  console.log(`Final results Player: ${playerScore}, Computer: ${computerScore}`);
}

function keepScore() { //function to keep score
  if (gameResult === `You Win! ${playerInput} beats ${computerMove}!`) {
    ++playerScore; //adds 1 point to player
  } else if (gameResult === `You Lose! ${computerMove} beats ${playerInput}!`) {
    ++computerScore; //adds 1 point to comp
  } 
  pScoreDiv.innerText = playerScore;
  cScoreDiv.innerText = computerScore;
}



function game(){ 
  computerPlay()
  playRound()



 
  

}