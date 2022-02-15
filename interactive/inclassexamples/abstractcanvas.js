function setup() {
  createCanvas(500, 500);
  background(128);

  buffer1 = createGraphics(250, 250);
  buffer1.background(255);
}

function draw() {
  background(128);
  buffer1.ellipse(random(width), random(height), 20, 20);

  image(buffer1, mouseX, mouseY);
}
