
$(window).on("load", function() {


// regex

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
var exploreButton= document.getElementById("exploreButton");

var backButtonBox = document.getElementById("backButtonBox");
var backButton1 = document.getElementById("backButton1")
var restartButton = document.getElementById("restartButton");

var directionalPad = document.getElementById("directionalKeys");

var leftClick = document.getElementById("left");
var upClick = document.getElementById("up");
var rightClick = document.getElementById("right");
var downClick = document.getElementById("down");



// item variables
var socialMedia = document.getElementById('socialMedia');
var conchShell = document.getElementById("conch");
var skullXBones = document.getElementById("skullXBones");
var ear = document.getElementById("ear");
var satchel = document.getElementById("satchel");
var liveOne = document.getElementById("lifeOne");
var liveTwo = document.getElementById("lifeTwo");
var liveThree = document.getElementById("lifeThree");
var longArrow = document.getElementById("longArrow");
var soundOn = document.getElementById("soundOn");
var music = document.getElementById('player_audio');
var itemsBox = document.getElementById('items');

// hidden stuff
$('#socialMedia').hide();
$('#continueButton1').hide();
$('#itemsAndLives').hide();
$('#lifeOne').hide();
$('#lifeTwo').hide();
$('#lifeThree').hide();
$('#conch').hide();
$('#skullXBones').hide();
$('#mainBox').hide();
$('#buttonContainer').hide();
$('#backButtonBox').hide();


$(ear).hide();
$(longArrow).hide();
$(soundOn).hide();
$(directionalPad).hide();
$(itemsBox).hide();


// Flag Variables 

var backButtonFlag = true;
var continueButtonFlag = true;
var skullFlag = true;
var restartButtonFlag = true;
var exploreButtonFlag = true;
var livesLostCounter = 0;

// button event listeners

buttonOne.addEventListener("click", buttonOneResponse);
buttonTwo.addEventListener("click", buttonTwoResponse);
buttonThree.addEventListener("click", buttonThreeResponse);
exploreButton.addEventListener("click", exploreButtonResponse);


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


// Start Game //

function startGameYN() {
   
  document.addEventListener('keydown', (event) => {
    
  var name = event.key;

  if(yesRegex.test(name)) {
    introText.style.display = "none";
    chapterOne();

  }
  else if (noRegex.test(name)) {
    introText.innerHTML = "<h3>Alright, refresh if you change your mind.</h3>"
    
  }
}, false);
    
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
      tridentBackGround.style.backgroundImage = "url(/Images/Untitled_Artwork.tiff)";
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
  $(itemsBox).show();
  continueRegex = false;
  yesRegex = false;
  exploreButtonFlag = false;
  skullFlag = false;

  this.removeEventListener('click', arguments.callee);
  
  if (backButtonFlag === false) {
    $(backButton1).hide();
  }
  if (exploreButtonFlag === false) {
    $(exploreButton).hide();
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


// 3 attack siren

function buttonThreeResponse(){
 
  exploreButtonFlag = true
  if(exploreButtonFlag === true) {
    $(exploreButton).show();
  }
  $(restartButton).hide();
  continueButtonFlag = true;
  if(continueButtonFlag === true) {
    $('#continueButton1').show();
  }
  
  buttonMenu.style.display = "none";
 
  mainText.innerHTML = "<p>A conch shell, lovely in the way it reflects the light. It seems to swirl like the milky way, though there's something ephemeral about it, as though it doesn't fully exist in any place at any given time.</p>"

  backButtonFlag = false;
  if(backButtonFlag === false) {
  $(backButton1).hide();
  }
    // backButton1.addEventListener("click", backResponse);
  // function backResponse() {
  //   backButtonFlag = false;
  //   continueButtonFlag = false;
  //   chapterOneCont();
  // }
  backButtonBox.style.display = "block";
}

// 4 explore

function exploreButtonResponse(){
  // $(restartButton).hide();
  exploreChapter();
}

function exploreChapter(){
  $(ear).hide();
  $(longArrow).hide();
  $(conchShell).hide();
  $(backButton1).hide();
  $(exploreButton).hide();
  $(directionalPad).show();
  mainText.innerHTML = "<p>Congratulations! You've aquired an item of particular value</p><p>...as you will soon learn.</p><p>The Siren nods at you with approval and gestures for you to explore your surroundings.</p>";

// Has coordinate map for directional clicks

  $(leftClick).on('click', function(){
    westResponse();
  });

  
  $(upClick).on('click', function(){
    northResponse(); 
    });


  $(rightClick).on('click', function(){
    eastResponse();
    });

  $(downClick).on('click', function(){
    southResponse();
    });

}

// explore responses //
// directional arrow responses //

function westResponse() {
  mainText.innerHTML = "<p>To your west, the Siren flashes a razor tooth smile and tries to communicate with you again.  Is there a ringing in your ears?</p>"

// keystroke bypass drag drop, to success

document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    console.log('Space pressed')
  }
})


  // $(directionalPad).hide();
  
  $(ear).show();
$(longArrow).show();
$(conchShell).css({
	'display': 'inline-block'
});

$(conchShell).draggable({
  containment: 'document',
  cursor: 'move',
  revert: true
});

$(ear).droppable({
  accept: conchShell,
  hoverClass: 'hovered',
  drop: drop
});

function drop(event, ui) {
  event.preventDefault();
  var draggable = ui.draggable;
  $(backButton1).hide();
  successChapter();
}


backButton1.addEventListener("click", backResponse);
  function backResponse() {
    backButtonFlag = false;
  chapterOneCont();
  };
  lifeCounter(); 

// $(backButton1).show();
// backButton1.addEventListener("click", backResponse2);
// function backResponse2() {
// backButtonFlag = false;
// exploreChapter();
// };

}



function northResponse() {
  mainText.innerHTML = "<p>To your north, you see a mystical range of pastel mountains, something of a mirage.</p>"
 
}

function eastResponse() {
  mainText.innerHTML = "<p>To your east, you see a wet reedy marsh extending for miles with what looks like civilization on its distant horizon.</p>"
}

function southResponse() {
  mainText.innerHTML = "<p>To your south, you see an immense cape strutting out into the sea, overshadowed and blended into a gnarly, giant rotten tooth mountain.</p>"
}

function successChapter() {
  $(ear).hide();
  $(longArrow).hide();
  $(conchShell).hide();
  $(backButton1).hide();
  $(exploreButton).hide();
  $(directionalPad).hide();

  mainText.innerHTML = "<p>Oooouch!! Something slithers down your ear canal, tears through your eardrum, and nestles into your cochlea. Overcome with some strange euphoria, you hear a beautiful voice singing:</p>"
  function timesUp() {
  span6.innerHTML = "Time's up!";
}

function timesUp() {
  music.play();
  $(soundOn).show();
  setTimeout(timedMessage, 30000);
  function timedMessage() {
    $(soundOn).hide();
    mainText.innerHTML = "<p>The Siren speaks, “You are brave, and it is noble of you to seek to help your people in this dark age… but if you are to succeed, you will need powers beyond your means. Go to the Cave of Mirrors, retrieve the Pearl Of The Moon, and free my sister, The White Witch. Only she can match the evil that is afoot.”</p>"
    setTimeout(levelComplete, 14000);
  }
}

function levelComplete() {
  mainText.innerHTML = `<p>Congratulations, and thanks for playing!</p><p>Would you like to see what happens next? If so, stay in touch via <a href="https://andrewjamesbarker.bandcamp.com/" target="_blank">Bandcamp</a> and while you're at it, check out the corresponding psych-rock album 'White Witch'.</p>`;
  $(socialMedia).show();
}
setTimeout(timesUp, 1000);


}

});

