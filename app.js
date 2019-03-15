let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const hammer_div = document.getElementById("h");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice() {
    const choices = ['h','s','p'];
    const randomNumber=Math.floor(Math.random() *3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter === "h") return "Hammer";
    if(letter === "s") return "Scissor";
    return "Paper";
}

function win(userChoice,computerChoice){
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice,computerChoice){   
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML=userScore;
    computerScore_span.innerHTML=computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose :(`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
    
}

function draw(userChoice,computerChoice){
    const smallUserWord="user".fontsize(3).sub();
    const smallCompWord="comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw ^o^`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const computerChoice=getComputerChoice();
    switch(userChoice + computerChoice){
        case "hs":
        case "ph":
        case "sp":
         win(userChoice,computerChoice);
         break;
        case "hp":
        case "ps":
        case "sh":
         lose(userChoice,computerChoice);
         break;
        case "hh":
        case "pp":
        case "ss":
         draw(userChoice,computerChoice);
         break;
    }

}

function main() {
  hammer_div.addEventListener('click', function() {
      game("h");
  })

  scissor_div.addEventListener('click', function() {
      game("s");
  })

  paper_div.addEventListener('click', function() {
      game("p");
  })
}

main();