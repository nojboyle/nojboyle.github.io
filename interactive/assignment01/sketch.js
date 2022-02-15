// Noah Boyle
// Assignment 1: Nintendo Switch graphic design
function setup() {
  createCanvas(900, 700);
}

function draw() {

  background(255);
  // joycon trigger buttons
  stroke(0);
  fill(0);
  square(80, 120, 110, 20);
  square(730,120, 110, 20);
  // creating the blue joycon
  stroke(51, 204, 255);
  fill(51, 204, 255);
  arc(160, 300, 200, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN)
  arc(160, 300, 200, 380, HALF_PI, QUARTER_PI, OPEN)
  // joycon buttons
  stroke(0);
  fill(0);
  ellipse(123, 205, 45, 55);
  rect(120, 140, 30, 10);
  ellipse(120, 305, 20, 20);
  ellipse(120, 350, 20, 20);
  ellipse(95, 325, 20, 20);
  ellipse(145, 325, 20, 20);
  square(130, 380, 20);

  // creating the red joycon
  stroke(255, 80, 80);
  fill(255, 80, 80);
  arc(760, 300, 200, 380, QUARTER_PI + HALF_PI, QUARTER_PI, OPEN)
  arc(760, 300, 200, 380, HALF_PI, QUARTER_PI, OPEN)
  arc(760, 300, 200, 380, 0, PI + QUARTER_PI, OPEN)
  // joycon buttons
  stroke(0);
  fill(0);
  ellipse(797, 340, 45, 55);
  rect(768, 140, 30, 10);
  rect(778, 130, 10, 30);
  ellipse(797, 205, 20, 20);
  ellipse(797, 250, 20, 20);
  ellipse(774, 225, 20, 20);
  ellipse(820, 225, 20, 20);
  square(770, 380, 20);

  // creating upper screen bar and volume/power button
  noStroke();
  fill(60);
  rect(180,111,560,20);
  stroke(0);
  fill(0);
  square(240,108,30);
  square(250,108,30);
  square(623,108,30);
  // creating the screen
  noStroke();
  fill(100);
  rect(160,117,600,380);
  // creating the inner-screen
  stroke(0);
  fill(0);
  rect(175,128,570,350);
  // creating the inner-inner-screen
  noStroke();
  fill(150);
  rect(190,145,540,310);



}
