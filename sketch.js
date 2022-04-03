
var footballfield_img,ball_img,background;
var database,gameState;
var form, player, playerCount;
var allPlayers, player1,player2;
var players= []

function preload(){
   footballfield_img = ("./assets/footballfield.jpg");
   ball_img = ("./assets/football.png") ;
   background = ("./assets/title.jpeg")
}
function setup(){
    canvas = createCanvas(windowWidth,windowHeight)
    database = firebase.database()
    Game = new game()
    Game.getState();
    Game.start();
}
function draw(){
    background(backgroundImage);

     ball_img.bounceOffEdges();
  if (playerCount === 2) {
    Game.update(1);
  }

  if (gameState === 1) {
     Game.play();
  }

  if (gameState === 2) {
     Game.end();
  }
}
function WindowResized(){
    resizeCanvas(windowWidth, windowHeight)
}