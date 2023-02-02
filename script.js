start();

function start(){
    console.log('start');
    playerChoice();
}

const element = document.querySelector('div#player2');

const myArray = [
    "paper",
    "rock",
    "scissors"
];

const randomComputerChoice = myArray[Math.floor(Math.random() * 3)];
// console.log(randomComputerChoice);


function playerChoice(){
    document.querySelector("button.rock").addEventListener("click", shaking);
    document.querySelector("button.scissors").addEventListener("click", shaking);
    document.querySelector("button.paper").addEventListener("click", shaking);
}

function shaking(){
    console.log('shaking')
    document.querySelector("div#player1").classList.add("shake");
    document.querySelector("div#player2").classList.add("shake");
    document.querySelector("div#player1").addEventListener("animationend", changeComputerHand);
    document.querySelector("div#player2").addEventListener("animationend", changeUserHand);
}

function changeComputerHand(){
    console.log('change computer hand');
    document.querySelector("div#player1").classList.remove("shake");
    document.querySelector("div#player1").classList.add(randomComputerChoice);
}

function changeUserHand(){
    console.log('change user hand');
    document.querySelector("div#player2").classList.remove("shake");
    document.querySelector("div#player2").classList.add("paper");
    determineWinner();
}

const user = "paper";
const computer = randomComputerChoice;
// console.log(user);
// console.log(computer);

function determineWinner(){
    if(user === computer) {
        showDraw();
    }
    else if (computer == 'rock'){
        showWin();
    } 
    else{
        showLose();
    }
}

function showWin(){
    document.querySelector("div#win").classList.remove("hidden");
}

function showLose(){
    document.querySelector("div#lose").classList.remove("hidden");
}

function showDraw(){
    document.querySelector("div#draw").classList.remove("hidden");
}
