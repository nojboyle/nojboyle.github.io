function setup() {
  let cnv = createCanvas(windowWidth, 1500);
  cnv.id('p5canvas');
  cnv.style('width', '');
  cnv.style('height','');

  background(0);
  noStroke();
}

function draw() {
  background(0,10);
  let x = random(0, width);
  let y = random(0, height);
  fill (random(255), random(255), random(255));
  ellipse(x,y,20,20);
}

function windowResized(){
  resizeCanvas(windowWidth, 1500);
}
