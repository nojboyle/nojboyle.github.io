// not bound to any function, they are global
let b1X = 0;
let b1Y = 200;
let b2X = 0;
let b2Y = 300;

// make two new speed variables
let b1Speed;
let b2Speed;

function setup() {
  createCanvas(500, 500);

  // give the speed variables some values

}

function draw() {


  background(250);

  fill(255, 0, 0);
  ellipse(b1X, b1Y, 50, 50);

  fill(0,255,0);

  ellipse(b2X, b2Y, 50, 50);

  b1X += b1Speed;
  b2X += b2Speed;
}

function mousePressed() {
  b1X = 0;
  b2X = 0;

  b1Speed = random(1,5);
  b2Speed = random(1,5);
}
