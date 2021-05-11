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
var mistakes = 0; 
var timeleft = 10;
var downloadTimer;


function startGame(){
    downloadTimer = setInterval(timer,1000);
    //initialize game variables
    var mistakes = 0;  
    clueHoldTime = 1000;
    for(var i = 1; i <= 3; i++) {
      document.getElementById("tally" + i).style.display = "none";
    }
    len = document.getElementById("total").value;
    pattern = new Array(len)
    for(var i = 0; i < len; i++) {
      pattern[i] = parseInt(Math.random() * 8) + 1
    }
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

function playTone(btn){ 
  let str = "aud" + btn
  play(str);
  tonePlaying = true 
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

//keyboard functionality  
var buttonPressed = [false,false,false,false,false,false,false,false];
document.addEventListener("keydown", function(event) {

  if (event.keyCode == 65 && !buttonPressed[0]) {
    buttonPressed[0] = true;
    guess(1);
    play('aud1')
    document.getElementById("button1").style.backgroundImage = "url('imgs/C1Shade.jpg')";
  }

  else if (event.keyCode == 83 && !buttonPressed[1]) {
    buttonPressed[1] = true;
    guess(2);
    play('aud2')
    document.getElementById("button2").style.backgroundImage = "url('imgs/D1Shade.jpg')";
  }

  else if (event.keyCode == 68 && !buttonPressed[2]) {
    buttonPressed[2] = true;
    guess(3);
    play('aud3')
    document.getElementById("button3").style.backgroundImage = "url('imgs/E1Shade.jpg')";
  }

  else if (event.keyCode == 70 && !buttonPressed[3]) {
    buttonPressed[3] = true;
    guess(4);
    play('aud4')
    document.getElementById("button4").style.backgroundImage = "url('imgs/F1Shade.jpg')";
  }

  else if (event.keyCode == 74 && !buttonPressed[4]) {
    buttonPressed[4] = true;
    guess(5);
    play('aud5')
    document.getElementById("button5").style.backgroundImage = "url('imgs/G1Shade.jpg')";
  }

  else if (event.keyCode == 75 && !buttonPressed[5]) {
    buttonPressed[5] = true;
    guess(6);
    play('aud6')
    document.getElementById("button6").style.backgroundImage = "url('imgs/A1Shade.jpg')";
  }

  else if (event.keyCode == 76 && !buttonPressed[6]) {
    buttonPressed[6] = true;
    guess(7);
    play('aud7')
    document.getElementById("button7").style.backgroundImage = "url('imgs/B1Shade.jpg')";
  }

  else if (event.keyCode == 186 && !buttonPressed[7]) {
    buttonPressed[7] = true;
    guess(8);
    play('aud8')
    document.getElementById("button8").style.backgroundImage = "url('imgs/C2Shade.jpg')";
  }
});

document.body.addEventListener("keyup", function(event) {
  if (event.keyCode == 65) {
    buttonPressed[0] = false;
    document.getElementById("button1").style.backgroundImage = "url('imgs/C1.jpg')";
  }

  else if (event.keyCode == 83) {
    buttonPressed[1] = false;
    document.getElementById("button2").style.backgroundImage = "url('imgs/D1.jpg')";
  }

  else if (event.keyCode == 68) {
    buttonPressed[2] = false;
    document.getElementById("button3").style.backgroundImage = "url('imgs/E1.jpg')";
  }

  else if (event.keyCode == 70) {
    buttonPressed[3] = false;
    document.getElementById("button4").style.backgroundImage = "url('imgs/F1.jpg')";
  }

  else if (event.keyCode == 74) {
    buttonPressed[4] = false;
    document.getElementById("button5").style.backgroundImage = "url('imgs/G1.jpg')";
  }

  else if (event.keyCode == 75) {
    buttonPressed[5] = false;
    document.getElementById("button6").style.backgroundImage = "url('imgs/A1.jpg')";
  }

  else if (event.keyCode == 76) {
    buttonPressed[6] = false;
    document.getElementById("button7").style.backgroundImage = "url('imgs/B1.jpg')";
  }

  else if (event.keyCode == 186) {
    buttonPressed[7] = false;
    document.getElementById("button8").style.backgroundImage = "url('imgs/C2.jpg')";
  }
});

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
