// rock paper scissors player vs comp
let playerInput = ""; //player input
let computerMove = ""; //computer's random move
let gameResult = ""; //game result statement
let youTied = "You Tied!";
let playerScore = 0;  //beginning score
let computerScore = 0; //beginning score



function playerPlay () { //prompt for payer to enter move
  playerInput = prompt("Enter your play (rock, paper, or scissors):", "rock"); //default 'rock'
  playerInput = playerInput.toLowerCase();
  
  if (playerInput === "rock"||"paper"||"scissors"){
    console.log(`You played: ${playerInput}`);
    return playerInput;
  }
   
  else{
    alert("Not a valid move. Please type: rock, paper, or scissors");
    playerPlay();
  }
   
}

function computerPlay(){ //randomly return number 0-2 and assign each value of rock, paper, or scissors
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0){ //rock
    computerMove = 'rock';  
  } else if (randomNum === 1) { //paper
    computerMove = 'paper'; 
  } else { //scissors
    computerMove = 'scissors';
 }
console.log(`Computer played: ${computerMove}`);
return computerMove;
}

// let youWin = `You Win! ${playerInput} beats ${computerMove}!`; //you win statement
// let youLose = `You Lose! ${computerMove} beats ${playerInput}!`; //you lose statement

function playRound() { //one round of the game
  if (playerInput == "rock" && computerMove == "paper" ||   //lose conditions
  playerInput == "scissors" && computerMove == "rock" || 
  playerInput === "paper" && computerMove === "scissors"){
  gameResult = `You Lose! ${computerMove} beats ${playerInput}!`;  //change gameResult statement
  } else if (playerInput === computerMove) { //tie
  gameResult += youTied; 
  } else {
  gameResult =`You Win! ${playerInput} beats ${computerMove}!`;  //change gameResult statement
  }   
  console.log(gameResult);
  return gameResult;
}

function finalScore() { //function for end of round scores
  console.log(`Final results Player: ${playerScore}, Computer: ${computerScore}`);
}

function game(){ //new function play 5 rounds 
  for(let i =0; i<5; i++){ //5 rounds
    playerPlay()
    computerPlay()
    playRound()
    // console.log(gameResult);
    if (gameResult === youTied) { //keep score
    } else if (gameResult == `You Win! ${playerInput} beats ${computerMove}!`) {
      ++playerScore; //adds 1 point to player
    } else {
      ++computerScore; //adds 1 point to comp
    }
    gameResult = "";
  }
finalScore(); //display final score after 5 rounds
}