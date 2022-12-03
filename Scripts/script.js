
$(window).on("load", function() {


// hidden stuff

$('#continueButton1').hide();


var yesRegex = /^(y|Y)$/ ;
var noRegex = /^(n|N)$/ ;
var continueRegex = /^(c|C)$/ ;

// Text and Dynamic background Variables

var introText = document.getElementById("startBox");
var mainText = document.getElementById("mainBox");

var itemsAndLives = document.getElementById("itemsAndLives");

// Background image Variables

var tridentBackGround = document.getElementById("backgroundTrident");


// Button variable

var buttonMenu = document.getElementById("buttonContainer");
var buttonOne = document.getElementById("button1");
var buttonTwo = document.getElementById("button2");
var buttonThree = document.getElementById("button3");
var exploreButton= document.getElementById("button4");

var backButtonBox = document.getElementById("backButtonBox");
var backButton1 = document.getElementById("backButton1")
var restartButton = document.getElementById("restartButton");

// object variables

var conchShell = document.getElementById("conch");
var skullXBones = document.getElementById("skullXBones");
var satchel = document.getElementById("satchel");
var liveOne = document.getElementById("lifeOne");
var liveTwo = document.getElementById("lifeTwo");
var liveThree = document.getElementById("lifeThree");

// Flag Variables 

var backButtonFlag = true;
var continueButtonFlag = true;
var skullFlag = true;
var restartButtonFlag = true;
var livesLostCounter = 0;



// reusable functions

function lifeCounter() {
  if(livesLostCounter === 3) {
    $(liveThree).hide();
    skullFlag = true;
  if(skullFlag === true) {
    $(skullXBones).show();
    skullXBones.style.display = "block";
    }
    backButtonFlag = false;
    if(backButtonFlag === false) {
    $(backButton1).hide();
    }
    mainText.innerHTML = "<p>Wah, wah, waaaah!</p><p>Please play again.</p>"
    $(restartButton).show();
    restartButton.addEventListener("click", function(){ location.reload(); });
  }

 else if(livesLostCounter === 2)
  {
    $(liveOne).hide();
    $(liveTwo).hide();

  } else if (livesLostCounter === 1) {
    $(liveOne).hide();
  }
}



var gameStarted = true;



function startGameYN() {
   
    if(gameStarted === true){
  document.addEventListener('keydown', (event) => {
    
  var name = event.key;

  if(yesRegex.test(name)) {
    introText.style.display = "none";
    chapterOne();
    gameStarted = false;
  }
  else if (noRegex.test(name)) {
    introText.innerHTML = "<h3>Alright, refresh if you change your mind.</h3>"
    gameStarted = false;
  }
}, false);
    } else {
      this.removeEventListener('click', arguments.callee);
    }
this.removeEventListener('click', arguments.callee);
   
}

startGameYN();

function chapterOne() {
  $(itemsAndLives).show();
  $(satchel).show();
  $(liveOne).show();
  $(liveTwo).show();
  $(liveThree).show();
  introText.innerHTML = "none"
  mainText.style.display = "block";

  document.addEventListener('keydown', (event) => {
    var name = event.key;

    if (continueRegex.test(name)) {
      mainText.style.display = "block";
      mainText.style.fontSize = "1.2em";
      tridentBackGround.style.backgroundImage = "url(/images/Untitled_Artwork.tiff)";
      mainText.innerHTML = "<p>You are standing on the beach of a foggy cove. Ten feet out from shore, a beautiful woman sits on a protruding rock. She smiles at you seductively and begins singing a song. Strangely, you hear nothing but the waves lapping at your feet. Press C to continue.</p>";
      this.removeEventListener('click', arguments.callee);
      document.addEventListener('keydown', (event) => {
        var name = event.key;  
      
      if(continueRegex.test(name)) {
        chapterOneCont();
        this.removeEventListener('click', arguments.callee);
       }
      },false);
    }
  }, false);
}


function chapterOneCont() {
  continueRegex = false;
  yesRegex = false;
  this.removeEventListener('click', arguments.callee);
  skullFlag = false;
  if (backButtonFlag === false) {
    $(backButton1).hide();
  }
  if (continueButtonFlag === false) {
    $('#continueButton1').hide();
  }
  if (skullFlag === false) {
    $(skullXBones).hide();
  }
  conchShell.style.display = "block";
  buttonMenu.style.display = "grid";
  mainText.style.display = "block";
  mainText.style.fontSize = "1.2em";
  buttonMenu.style.textTransform = "uppercase";
  mainText.innerHTML = "<p>You are standing on the beach of a foggy cove. Ten feet out from shore, a beautiful woman sits on a protruding rock. She smiles at you seductively and begins singing a song. Strangely, you hear nothing but the waves lapping at your feet. Press C to continue.</p> <h3> As you struggle to hear the Siren’s song, a conch shell washes up on the beach.</h3>";
}

// button event listeners

buttonOne.addEventListener("click", buttonOneResponse);
buttonTwo.addEventListener("click", buttonTwoResponse);
buttonThree.addEventListener("click", buttonThreeResponse);
exploreButton.addEventListener("click", exploreButtonResponse);



// button chapter 1 responses

// 1 Siren greeting

function buttonOneResponse(){
  $(restartButton).hide();
  backButtonFlag = true;
  if(backButtonFlag === true) {
  $(backButton1).show();
  }
  
  buttonMenu.style.display = "none";
  backButtonBox.style.display = "block";
  mainText.innerHTML = "<p>The Siren smiles and gestures towards the Conch.</p>"
  backButton1.addEventListener("click", backResponse);
  function backResponse() {
    backButtonFlag = false;
  chapterOneCont();
  }
}

// 2 pick up conch

function buttonTwoResponse(){
  $(restartButton).hide();
  continueButtonFlag = true;
  if(continueButtonFlag === true) {
    $('#continueButton1').show();
  }
  
  backButtonFlag = true;
  if(backButtonFlag === true) {
  $(backButton1).show();
  }
  buttonMenu.style.display = "none";
  backButtonBox.style.display = "block";
  mainText.innerHTML = "<p>A conch shell, lovely in the way it reflects the light. It seems to swirl like a galaxy. There's something impenetrable about it, as though it doesn't fully exist in any one place at any given time.</p>"
  backButton1.addEventListener("click", backResponse);
  function backResponse() {
    backButtonFlag = false;
    continueButtonFlag = false;
    chapterOneCont();
  }
}


// 3 attack siren

function buttonThreeResponse(){
  $(restartButton).hide();
  livesLostCounter ++;
   
  skullFlag = true;
  if(skullFlag === true) {
    $(skullXBones).show();
    skullXBones.style.display = "block";
    }
  backButtonFlag = true;
  if(backButtonFlag === true) {
  $(backButton1).show();
  }
  conchShell.style.display = "none";
  buttonMenu.style.display = "none";
  backButtonBox.style.display = "block";
  if(livesLostCounter === 1) {
  mainText.innerHTML = "<p>The nerve of you?!</p><p>You dead.</p>";
  } else if (livesLostCounter === 2) {
    mainText.innerHTML = "<p>The double nerve of you?!</p><p>You dead, again!</p>";
}
  backButton1.addEventListener("click", backResponse);
  function backResponse() {
    backButtonFlag = false;
  chapterOneCont();
  };
  lifeCounter(); 
}

// 4 explore

function exploreButtonResponse(){
  $(restartButton).hide();
  alert("Four!!");
}

});

// Timer for exploring later on


// function timesUp() {
//   span6.innerHTML = "Time's up!";
// }


// setTimeout(timesUp, 120000);
