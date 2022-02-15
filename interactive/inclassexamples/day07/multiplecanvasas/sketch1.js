function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  fill(random(255));
  ellipse(random(width), random(height), 20, 20);

  if (mouseIsPressed && mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200) {
    fill(0,255,0);
    ellipse(mouseX, mouseY, 50, 50);


    // alert the parent (index.html) of our position
    window.parent.x = mouseX;
    window.parent.y = mouseY;
  }
}
