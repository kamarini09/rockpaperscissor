start();

function start(){
    console.log('start');
    playerChoice();
}


const myArray = [
    "paper",
    "rock",
    "scissors"
];

const randomComputerChoice = myArray[Math.floor(Math.random() * 3)];
// console.log(randomComputerChoice);

function shake_scissors(){
    shaking('scissors')
}



function playerChoice(){
    document.querySelector("button.rock").addEventListener("click", () => {shaking('rock')});
    document.querySelector("button.scissors").addEventListener("click",  shake_scissors);
    document.querySelector("button.paper").addEventListener("click", () => {shaking('paper')});
}

function shaking(hand){

    console.log('shaking')
    document.querySelector("div#player1").classList.add("shake");
    document.querySelector("div#player2").classList.add("shake");
    document.querySelector("div#player1").addEventListener("animationend", changeComputerHand);
    document.querySelector("div#player2").addEventListener("animationend", () => {changeUserHand(hand)});
}

function changeComputerHand(){
    console.log('change computer hand');
    document.querySelector("div#player1").classList.remove("shake");
    document.querySelector("div#player1").classList.add(randomComputerChoice);
}

function changeUserHand(hand){
    console.log('change user hand');
    document.querySelector("div#player2").classList.remove("shake");
    document.querySelector("div#player2").classList.add(hand);
    determineWinner(hand);
}

// const user = "paper";
const computer = randomComputerChoice;

// console.log(user);
// console.log(computer);

function determineWinner(hand){
    if(hand === computer) {
        showDraw();
    }
    else if (hand == 'rock'){
        if(computer =='scissors'){
            showWin();
        }
       else {
        showLose();
       }  
    
    } 
    else if(hand == 'scissors'){
        if(computer =='paper'){
            showWin();
        }
       else {
        showLose();
       }  
       
    }
    else if(hand == 'paper'){
        if(computer =='rock'){
            showWin();
        }
       else {
        showLose();
       }  
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
