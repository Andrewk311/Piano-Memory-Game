//Global Constants
var clueHoldTime = 1000;
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var len = document.getElementById("total").value;
var pattern = new Array(len);
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var mistakes = 0; //only works afer i reset it idk why 
var timeleft = 10;
var downloadTimer;


function startGame(){
    downloadTimer = setInterval(timer,1000);
    //initialize game variables
    var mistakes = 0;  
    clueHoldTime = 1000;
    for(var i = 1; i <= 3; i++) document.getElementById("tally" + i).style.display = "none";
    len = document.getElementById("total").value;
    pattern = new Array(len)
    for(var i = 0; i < len; i++) pattern[i] = parseInt(Math.random() * 8) + 1
    progress = 0;
    gamePlaying = true;
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
    
}

function stopGame(){
    gamePlaying = false;
    clearInterval(downloadTimer);
    mistakes = 0;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

function play(key){
  console.log("test " + key);
  let keyElement = document.getElementById(key);
  if (keyElement.paused){
    keyElement.play();
  }
  else{
    keyElement.currentTime=0;
  }
}

function playTone(btn,len){ 
  let str = "aud" + btn
  play(str);
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}

function stopTone(){
    tonePlaying = false
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  document.getElementById("progressBar").value = 0; //resets the countdown at start
  timeleft = 10;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(var i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("progress: " + progress)
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    if (clueHoldTime > 50){
      clueHoldTime -= clueHoldTime*(0.15)
    }
  }
}


function timer(){
  if (timeleft < 0){
    clearInterval(downloadTimer);
    loseGameTimer();
  }
  document.getElementById("progressBar").value = 10 - timeleft;
  timeleft -= 1;
}

function loseGame(){
  document.getElementById("tally3").style.display = "inline";
  stopGame();
  document.getElementById("progressBar").value = 0;
  alert("Game Over. You lost.");
}

function loseGameTimer(){
  stopGame();
  alert("Time is up. You lost.")
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if(pattern[guessCounter] == btn){
    if(guessCounter == pattern.length-1){
      winGame();
    } else if(guessCounter == progress) {
      progress++;
      playClueSequence();
    }
    else{
      guessCounter++;
    }
  }
  else{
    if(mistakes == 2){
      document.getElementById("tally3").style.display = "inline";

      loseGame();
    }
    else {
      mistakes+=1;
      document.getElementById("tally" + mistakes).style.display = "inline";
      console.log("mistake tally: " + mistakes);
    }
  }
}
