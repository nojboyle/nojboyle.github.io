let angle = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  if (mouseIsPressed == true) {

  fill(random(255),random(255),random(255),random(20,100));

  // move the origin to the mouse position
  push();
  translate (mouseX, mouseY);
  rotate (radians(angle));



  rect(100, 0, 50, 50);
  pop();
  angle += 1
  }

}

function mousePressed(){

}

function keyPressed(){
  //ask the browser to save the user's drawing

}
