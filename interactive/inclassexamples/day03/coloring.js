function setup() {
  createCanvas(500, 500);
  background(0);
  strokeWeight(10);
  stroke(255);
}

function draw() {
  
  rect(0,0,100,20);

  if (mouseIsPressed){
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function keyPressed() {

  if (key == 'c' || key == 'C' ) {
    stroke(random(255), random(255), random(255));
  }
}
