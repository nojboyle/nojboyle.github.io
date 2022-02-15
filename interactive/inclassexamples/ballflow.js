function setup() {
  createCanvas(500, 500);
  background(255);
  for (let i = 0; i < 100; i++) {
    creatures.push( new Ball());
  }

  buffer = createGraphics(500,500);
  buffer.background(255);
  buffer.stroke(0);
  buffer.strokeWeight(20);
}

function draw() {
  background(128);
  for (let i = 0; i < creatures.length; i++) {
    creatures[i].move();
    creatures[i].display();
  }
  if (mouseIsPressed) {
    buffer.line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

class Ball {
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height);
    this.speed = random(1, 5);
    this.color = color(random(255), random(255), random(255));
    this.size = random(10, 30);
  }
  display(){
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
  move() {
    this.y += this.speed;

    let c = red(buffer.get(this.x, this.y));

    if(c == 0) {
      this.speed *= -1;
    }

    if(this.y > height) {
      this.y = random(-500, 0);
      this.x = random(0, width);
    }
  }
}
