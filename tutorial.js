//dit is om te kijken of html goed js heeft ingeladen
console.log('main loaded')

//grenzen waarbij het getal moet zijn
const minWorth = 1;
const maxWorth = 6;

//Player variabelen
const playerDiceOne = document.querySelector(".player-dice-one");
const playerDiceTwo = document.querySelector(".player-dice-two");

//computer variabelen
const computerDiceOne = document.querySelector(".computer-dice-one");
const computerDiceTwo = document.querySelector(".computer-dice-two");

const messageBox = document.querySelector('.message-box');
const creditsPlayer = document.querySelector('.player-credits');
const creditsComputer = document.querySelector('.computer-credits');


//buttons
const buttonH = document.querySelector('.higher-button');
const buttonL = document.querySelector('.lower-button');
const buttonG = document.querySelector('.go-button');
const buttonT = document.querySelector('.dice-button');
const restartButton = document.querySelector('.restart-button');

// init state
//credits player & computer
let creditsComp = 5;
let creditsPlay = 5;
let compThrowSum = 0;
let userChoice = "";
let userThrowSum = 0;

buttonG.disabled = false;
buttonH.disabled = true;
buttonL.disabled = true;
buttonT.disabled = true;

//tutorial stappen
const tutorialSteps = [
  "Stap 1: In dit spel ga je dobbelstenen gooien om tegen de computer te spelen. Om het spel te beginnen klik op Go!",
  "Stap 2: Je moet nu kijken naar wat de computer heeft gegooid, kan je hoger of lager gooien? Maak je gok!.",
  "Stap 3: Klik nu op gooi. Als jouw gok correct is, win je! Zo niet, dan verlies je.",
  "Stap 4: Je kunt nu op de home button klikken om de officiele spel te starten! Veel plezier en succes!"
];

let currentStep = 0; // Huidige stap initialiseren

function nextStep() {
  console.log('Button clicked, current step:', currentStep);
  if (currentStep < tutorialSteps.length) {
    document.querySelector('.tutorial-text').textContent = tutorialSteps[currentStep];
    currentStep++; // Gaat naar de volgende stap
  } else {
    console.log('Tutorial is afgelopen.');
  }
}

//queryselector en eventlistener voor next button 
document.querySelector('.next-button').addEventListener('click', nextStep); 

//button en function voor GO
buttonG.addEventListener('click', function() {  
  // reset game state
  throwCompDice();
  buttonG.disabled = true;
  buttonG.classList.remove('green');
  buttonG.classList.add('red');
  buttonH.disabled = false;
  buttonH.classList.remove('red');
  buttonH.classList.add('green');
  buttonL.disabled = false;
  buttonL.classList.remove('red');
  buttonL.classList.add('green');
  buttonT.disabled = true;
  messageBox.textContent = "het spel is gestart!";
});

//functie voor compdice
function throwCompDice() {
  let diceOne = getRandomInt();
  let diceTwo = getRandomInt();
  compThrowSum = diceOne + diceTwo;
  
  console.log(diceOne);
  console.log(diceTwo);
   
  if (diceOne===0) {
    computerDiceOne.innerHTML = "&#9856;" //ascii voor dobbelsteen ogen
  } else if (diceOne===1) {
    computerDiceOne.innerHTML = "&#9857;"
  } else if (diceOne===2) {
    computerDiceOne.innerHTML = "&#9858;"
  } else if (diceOne===3) {
    computerDiceOne.innerHTML = "&#9859;"
  } else if (diceOne===4){
    computerDiceOne.innerHTML = "&#9860;"
  } else  {
    computerDiceOne.innerHTML = "&#9861;"
  }
  if (diceTwo===0) {
    computerDiceTwo.innerHTML = "&#9856;"
  } else if (diceTwo===1) {
    computerDiceTwo.innerHTML = "&#9857;"
  } else if (diceTwo===2) {
    computerDiceTwo.innerHTML = "&#9858;"
  } else if (diceTwo===3) {
    computerDiceTwo.innerHTML = "&#9859;"
  } else if (diceTwo===4){
    computerDiceTwo.innerHTML = "&#9860;"
  } else  {
    computerDiceTwo.innerHTML = "&#9861;"
  } 
}

//add Eventlistener voor button hoger
buttonH.addEventListener('click', function(){  
  userChoice = "hoger";
  messageBox.textContent = "speler koos hoger";
  buttonG.disabled = true;
  buttonH.disabled = true;
  buttonH.classList.remove('green');
  buttonH.classList.add('red');
  buttonL.disabled = true;
  buttonL.classList.remove('green');
  buttonL.classList.add('red');
  buttonT.disabled = false;
  buttonT.classList.remove('red');
  buttonT.classList.add('green');
});

//add Eventlistener voor button lager
buttonL.addEventListener('click', function(){  
  userChoice = "lager";
  messageBox.textContent = "speler koos lager";
  buttonG.disabled = true;
  buttonH.disabled = true;
  buttonH.classList.remove('green');
  buttonH.classList.add('red');
  buttonL.disabled = true;
  buttonL.classList.remove('green');
  buttonL.classList.add('red')
  buttonT.disabled = false;
  buttonT.classList.remove('red');
  buttonT.classList.add('green');
});

//button throw
buttonT.addEventListener('click', function(){
  buttonT.disabled = true;
  buttonT.classList.remove('green');
  buttonT.classList.add('red');
  buttonG.classList.remove('red');
  buttonG.classList.add('green')
  throwUserDice();
  if(userChoice === "lager") {
    if(userThrowSum < compThrowSum) { //vergelijking
      creditsComp--;
      creditsPlay++;
      messageBox.textContent = "Je hebt gewonnen!";
    } else {
      creditsComp++;
      creditsPlay--;
      messageBox.textContent = "je hebt verloren :(";
    }
    creditsComputer.innerHTML = creditsComp;
    creditsPlayer.innerHTML = creditsPlay;    
  } else if (userChoice === "hoger") {
    if(userThrowSum > compThrowSum) {
      creditsComp--;
      creditsPlay++;
      messageBox.textContent = "Je hebt gewonnen!";
    } else {
      creditsComp++;
      creditsPlay--;
      messageBox.textContent = "je hebt verloren :( ";
    }  
  }
//credits op beeld laten zien
creditsComputer.innerHTML = creditsComp;
creditsPlayer.innerHTML = creditsPlay; 
//conditie om spel te eindigen 
if(creditsComp > 0 && creditsPlay > 0) {
    buttonG.disabled = false;
    buttonG.classList.remove('red');
    buttonG.classList.add('green');
    buttonH.disabled = true;
    buttonH.classList.remove('green');
    buttonH.classList.add('red');
    buttonL.disabled = true;
    buttonL.classList.remove('green');
    buttonL.classList.add('red');
    buttonT.disabled = true;
  } else {
    // game over
    messageBox.textContent = "Game Over!!!" + (creditsComp > creditsPlay ? " Computer heeft gewonnen" : " Jij hebt gewonnen"); //vervanging voor if statement
    buttonG.classList.remove('green');
    buttonG.classList.add('red');
    restartButton.classList.remove('hidden');
  }
});
//restartbutton beginscherm
restartButton.addEventListener('click', function(){
  creditsComp = 5;
  creditsPlay = 5;
  buttonG.disabled = false;
  buttonG.classList.remove('red');
  buttonG.classList.add('green');
  buttonH.disabled = true;
  buttonL.disabled = true;
  buttonT.disabled = true;
  restartButton.classList.add('hidden');
  messageBox.textContent ="Klik op GO om het spel te starten!";
  creditsComputer.innerHTML = creditsComp;
  creditsPlayer.innerHTML = creditsPlay; 
 });
//function userdobbelsteen
function throwUserDice() {
  let diceOne = getRandomInt();
  let diceTwo = getRandomInt();
  userThrowSum = diceOne + diceTwo;
  
  console.log(diceOne);
  console.log(diceTwo);
   
  if (diceOne===0) {
    playerDiceOne.innerHTML = "&#9856;"
  } else if (diceOne===1) {
    playerDiceOne.innerHTML = "&#9857;"
  } else if (diceOne===2) {
    playerDiceOne.innerHTML = "&#9858;"
  } else if (diceOne===3) {
    playerDiceOne.innerHTML = "&#9859;"
  } else if (diceOne===4){
    playerDiceOne.innerHTML = "&#9860;"
  } else  {
    playerDiceOne.innerHTML = "&#9861;"
  }
  if (diceTwo===0) {
    playerDiceTwo.innerHTML = "&#9856;"
  } else if (diceTwo===1) {
    playerDiceTwo.innerHTML = "&#9857;"
  } else if (diceTwo===2) {
    playerDiceTwo.innerHTML = "&#9858;"
  } else if (diceTwo===3) {
    playerDiceTwo.innerHTML = "&#9859;"
  } else if (diceTwo===4){
    playerDiceTwo.innerHTML = "&#9860;"
  } else  {
    playerDiceTwo.innerHTML = "&#9861;"
  } 
}
//mathrandom function
function getRandomInt() {
  return Math.floor(Math.random() * maxWorth) + minWorth;
}

// Toon de eerste stap onmiddellijk voor tutorial
nextStep();