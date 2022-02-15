// load in our graphics
let bg;
let ufo;
let cow;

// keep track of UFO position
let ufox = 250;
let ufoy = 250;

// keep track of X speed
let speedX = 0;
let accel = 0.1;

// keep track of points
let points = 0;
let cowPoints = 0;

function preload(){
  bg = loadImage('background.png');
  ufo = loadImage('ufo.png');
  cow = loadImage('cow.png');
}

function setup(){
  createCanvas(500,500);
  image(bg, 0, 0);
}

function draw(){
  imageMode(CORNER);
  image(bg, 0, 0)

  // display points
  text("Points" + points, 20, 20);
  text("Cow Points" + cowPoints, 20, 40);

  imageMode(CENTER);
  image(ufo, ufoX, ufoY);

  image(cow, cowX, cowY);

  // see how far away the cow is from the UFO
  let d = dist(cowX, cowY, ufoX, ufoY);
  line(cowX, cowY, ufoX, ufoY);
  text(d, ufoX+100, ufoY);

  if (d < 50) {
    points += 1;
    // teleport the cow somewhere else
    cowX = random(50, 450);
  }

  // make the cow run away from the UFO
  if (cowX < ufoX){
    cowX -= 1;

  }
  else {
    cowX += 1;
  }

  // see if the cow escaped!
  if (cowX > width || cowX < 0) {
    cowX = 250;

  }

  //move the UFO
  if (keyIsDown(LEFT_ARROW)) {
    ufoX -= 3;
  }

  if (keyIsDown(LEFT_ARROW)) {
    speedX -= accel;
  }
  if (keyIsDown (RIGHT_ARROW)){
    ufoX += 3;
  }

  if (keyIsDown (RIGHT_ARROW)){
    speedX += accel;
  }
  ufoX += speedX;

  speedX = constrain(speedX, -10, 10);

  if (speedX > 10) {
    speedX = 10;
  }
  if (speedX < -10) {
    speedX = -10;
  }

  if (keyIsDown (UP_ARROW)) {
    ufoY -= 3;
  }
  if (keyIsDown (DOWN_ARROW)) {
    ufoY += 3;
  }

  //wrap around

} 
