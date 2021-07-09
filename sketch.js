var ball;


function setup() {
  createCanvas(800,400);
  ball=createSprite(400, 200, 50, 50);
}

function draw() {
  background("red"); 
  
  if (keyDown(UP_ARROW)){
    ball.y-=2
  }
  if (keyDown(DOWN_ARROW)){
    ball.y+=2
  }
  if (keyDown(LEFT_ARROW)){
    ball.x-=2
  }
  if (keyDown(RIGHT_ARROW)){
    ball.x+=2
  }








  drawSprites();
}