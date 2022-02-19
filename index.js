let computerGuess;
let userGuess = [];
let userOutputGuess = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("audio.wav")
let audioo = new Audio("audioo.wav")
let music = new Audio("music.wav")

const init = () => {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  console.log(computerGuess);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};

/**
 * reload the page when user click on newgame button
 */

const newGameBegin = () => {
    audio.play()
    window.location.reload();
    
};

/**
 * button to create a new game & make input field disabled
 */

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute("disabled", true);
};

/**
 * main logic of our app
 */
const compareGuess = () => {
  let userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;


  /**
   * check if the guessNumber is low hight or correct
   */
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userOutputGuess.innerHTML = "Your guess is High 😲";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userOutputGuess.innerHTML = "Your guess is Low 😟";
      userNumberUpdate.value = "";
    } else {
      userOutputGuess.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
    music.play();
  } else {
    if (userNumber > computerGuess) {
      userOutputGuess.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userOutputGuess.innerHTML = `You Loose!! Correct number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userOutputGuess.innerHTML = "It's Correct😀";
      userNumberUpdate.value = "";
      startNewGame();
    }
    audioo.play()
  }

  /**
   * show the previous attempts number
   */
  document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    audio.play()
    maxGuess = 10;
    startGame();
};

const hardMode = () => {
    audio.play()
    maxGuess = 5;
    startGame();
};