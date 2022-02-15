function preload() {

}

function setup() {
  createCanvas(500,500);
  background(128);
}

function draw(){
  let r = map(mouseX, 0, 500, 0, 255);
  let g = map(mouseY, 0, 500, 0, 255);
  background(r, g, 0);
  ellipse(mouseX, mouseY, 10, 10);
}
