// Noah Boyle
// Assignment 2: Breakout Inspired Game "Moon-Breaker"
let sky;
let paddle;
let moon;
let ball;
let hue = 0;

let sky1 = 0;
let sky2 = 700;

let paddleX = 250;
let paddleY = 680;

let moonX = -100;
let moonY = -100;

let ballX;
let ballY;

let xSpeed;
let ySpeed;
let accel = 0.1;
let points = 0;
let bounces = 0;

let sound1;
let sound2;
let sound3;

function preload() {
  sky = loadImage('background2.png');
  paddle = loadImage('paddle-hd.png');
  moon = loadImage('moon.png');
  sound1 = loadSound('bounce.mp3');
  sound2 = loadSound('moonbreak.mp3');
  sound3 = loadSound('gameover.mp3');
}

function setup() {
  createCanvas(700, 700);
  colorMode(HSB);

  ballX = 350;
  ballY = 350;

  xSpeed = 0;
  ySpeed = 0;

  fill(0);
  text ("Moons Destroyed:"+points, 20, 20);
  fill(0);
  text ("Bounces:"+bounces, 20, 40);
}

function draw() {
  background(128);

  image(sky, 0, sky1);
  image(sky, 0, sky2);

  image(paddle, paddleX, paddleY);

  image(moon, moonX, moonY);

  if (keyIsDown(68) && paddleX < 460){
    paddleX+= 5;
  }
  if (keyIsDown(65) && paddleX > 0){
    paddleX-= 5;
  }

  sky1 += 2;
  sky2 += 2;

  if (sky1 >= 700) {
    sky1 = sky2 - 700;
  }
  if (sky2 >= 700) {
    sky2 = sky1 - 700;
  }
  fill(128);
  noStroke();
  rect(0,0,25,700);
  rect(0,0,700,25);
  rect(680,0,25,700);


  fill(hue, 255, 255);
  ellipse(ballX,ballY,25,25);
  hue = hue +1;
  if (hue > 255){
    hue = 0;
  }

  ballX += xSpeed
  ballY += ySpeed

  if (ballX > width-30) {
    xSpeed *= -1;
    sound1.play();
  }

  if (ballX < 30) {
    xSpeed *= -1;
    sound1.play();
  }

  if (ballY > height) {
    ballX = 350;
    ballY = 350;
    xSpeed = 0;
    ySpeed = 0;
    points = 0;
    bounces = 0;
    sound3.play();
  }

  if (ballY < 30) {
    ySpeed *= -1;
    sound1.play();
  }

  let ballRight = ballX + 8;
  let ballLeft  = ballX;
  let paddleRight = paddleX + paddle.width;
  let paddleLeft  = paddleX;
  let ballTop   = ballY;
  let ballBottom = ballY + 8;
  let paddleTop    = paddleY;
  let paddleBottom = paddleY + paddle.height;

  if (ballRight < paddleLeft || ballLeft > paddleRight || ballBottom < paddleTop || ballTop > paddleBottom) {
    xSpeed = xSpeed;
    ySpeed = ySpeed;
  }
  else {

    xSpeed *= 1;
    //let xxSpeed = map(xSpeed, 25, paddleX, paddleY, ballX);
    //xSpeed = xxSpeed;
    ySpeed *= -1;
    //let yySpeed = map(ySpeed, 10, paddleX, paddleY, ballY);
    //ySpeed = yySpeed;
    bounces += 1;
    fill(0);
    textSize(20);
    text ("Bounces:"+bounces, 20, 20);
    sound1.play();
  }

  let moonRight = moonX + moon.width;
  let moonLeft = moonX;
  let moonTop = moonY;
  let moonBottom = moonY + moon.height;

  if (ballRight < moonLeft || ballLeft > moonRight || ballBottom < moonTop || ballTop > moonBottom) {

    xSpeed = xSpeed;
    ySpeed = ySpeed;
  }
  else {
    moonX = random(100, width-150);
    moonY = random(100, height-425);
    points += 1;
    fill(0);
    textSize(20);
    text ("Moons Destroyed:"+points, 140, 20);
    sound2.play();
  }
  fill(0);
  textSize(20);
  text ("Bounces:"+bounces, 20, 20);
  fill(0);
  textSize(20);
  text ("Moons Destroyed:"+points, 140, 20);
}

function mousePressed(){

  if (xSpeed || ySpeed != 0) {
    xSpeed = xSpeed;
    ySpeed = ySpeed;
  }
  else {
    moonX = random(100, width-150);
    moonY = random(100, height-425);
    xSpeed += random(10-20);
    ySpeed += random(10-20);
  }

}
