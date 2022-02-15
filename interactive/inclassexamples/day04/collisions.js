// keep track of box position
let x = 200;
let y = 300;
let size = 50;
// keep track of speed
let speedX = 4;
let speedY = -2;

// keep track of color
let r = 255;
let g = 255;
let b = 255;

function setup() {
  createCanvas(800, 600);
  background(0);
}

function draw() {
  background(0);

  // draw box at current position
  fill(r,g,b);
  rect(x,y,size,size);

  fill(0);
  textAlign(CENTER, CENTER);
  text("DVD", x+size/2, y+size/2);

  // move the box so it is somewhere else
  x += speedX;
  y += speedY;
  
  // detect if we hit the right side
  if (x > width-size || x < 0) {
    // reverse the speed
    speedX *= -1;

    r = random(0,255);
    g = random(255);
    b = random(255);
  }
  // detect up/down collisions
  if (y > height-size || y <0){
    speedY *= -1;

  }


}



function mousePressed() {

}
