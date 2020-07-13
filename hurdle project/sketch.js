var database;
var form,player,game;
var gamestate = 0;
var playercount;
var allplayers;
var runner1,runner2,runner3,runner4;
var runners;

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getstate();
  game.start(); 
}

function draw() {
  if(playercount===4) {
    game.update(1);
  }

  if(gamestate===1) {
    clear();
    game.play();
  }

  if(gamestate===2) {
    game.end();
  }
  
}