var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bird;
var pipes = [];

var gameOver;

var score;

var back;

function preload() {
  back = loadImage("bg.jpg");
  bird
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  bird = new Bird();
  pipes.push(new Pipe());

  score = 0;
}

function draw() {

  background(back,this.background);
  
  fill(251,188,5);
  text("Score: "+ score, 300,50);
  
 if(gameState === PLAY){

  

  pipes.velocityX = -(6 + 3*score/100);

  score = score + Math.round(getFrameRate()/60);

  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].display();
    pipes[i].update();
    
    if(pipes[i].hits(bird)){
      console.log("HIT");
      score = score-10;
    //   bird = loadImage("ghost1.png");
    }
    //else{
    //   bird = loadImage("ghost.png");
    // }
    
    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }


  }

  bird.update();
  bird.display();

  if ( frameCount % 60 == 0){
    pipes.push(new Pipe());
  }
 }
 
}

function keyPressed(){

  if (keyCode === 32){
    bird.up();
    //console.log("SPACE");
  }
}
