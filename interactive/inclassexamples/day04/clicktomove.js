// keep track of character position
let x = 250;
let y = 250;

// keep track of desired position
let desiredX = 100;
let desiredY = 100;
let speed = 2;


function setup(){
  createCanvas(500,500);
}

function draw(){
  background(0);

  fill(255);
  ellipse(x,y,50,50);

  fill(0,255,0);
  ellipse(desiredX, desiredY, 10, 10);

  // figure out how far away we are in the x and y directions
  let xDist = desiredX - x;
  let yDist = desiredY - y;

  let xMove = 0.05 * xDist;
  let ymove = 0.05 * yDist;

  x += xMove;
  y += yMove;

  // have the character move towards the desired position
  if (x > desiredX){
    x -= speed;
  }
  if (x < desiredX) {
    x += speed;
  }
  if (y > desiredY){
    y -= speed;
  }
  if (y < desiredY){
    y += speed;
  }
}

function mousePressed() {
  // teleport the object to this position
  desiredX = mouseX;
  desiredY = mouseY;
}
