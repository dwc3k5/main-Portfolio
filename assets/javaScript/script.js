
// variables not working... need to figure them out for more concise code

var getIndex = document.getElementById('indexFormat');
var getPortfolio = document.getElementById('portfolioFormat');
var getContact = document.getElementById('contactFormat');

function index(){
  document.getElementById('indexFormat').style.display = 'block';
  document.getElementById('portfolioFormat').style.display = 'none';
  document.getElementById('contactFormat').style.display = 'none';
}
function portfolio(){
  document.getElementById('indexFormat').style.display = 'none';
  document.getElementById('portfolioFormat').style.display = 'block';
  document.getElementById('contactFormat').style.display = 'none';
}
function contact(){
  document.getElementById('indexFormat').style.display = 'none';
  document.getElementById('portfolioFormat').style.display = 'none';
  document.getElementById('contactFormat').style.display = 'block';
}

/*Portfolio:rpgGame*/
$("#rpg").click(function(){
  $("#portTitle").html("<h3>Classic RPG Game<h3>");
  $("#portInfo").html("<p>A take on classic rpg games.</p><br><p>Assemble a team of adventurers and fight against enemies. Each party member has unique stats and provides a character specific ability.</p><br><p>Features</p><br><ul><li>Party Selection: choose one of three heroes for each spot in your group.</li><br><li>Party inventory: keep your characters in the fight with restorative potions, and bring the pain with explosives!</li></ul>");
  $("#portLink").html("<button>Try it Out!</button>");
});
/*Portfolio:horrorTrivia*/
$("#horror").click(function(){
  $("#portTitle").html("<h3>Horror Trivia<h3>");
  $("#portInfo").html("<p>Can you make it through?</p><br><p>Test your knowledge of the horror genre in a survival based trivia game. Your knowledge of horror literature, cinema, and games will be tested as you race against the clock.</p><br><p> Features </p><br><ul><li>Interactive timers: Correct answers earn you more time, incorrect ones sap it away.</li><br><li>Dynamic effects: Color and background changes signify the relative danger you're in.</li></ul>");
  $("#portLink").html("<button>Try it Out!</button>");
});
