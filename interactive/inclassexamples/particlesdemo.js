function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0,20);
  
  if(mouseIsPressed) {
    particles.push(new Particle());
  }
  for (let i = 0; i < particles.length; i++){
    let offScreen = particles[i].moveAndDisplay();
    if(offScreen == true){
      particles.splice(i, 1);
    }
  }
  
  fill(255);
  text("# of particles" + particles.length, 20, 20);
}

class Particle {
  constructor() {
    this.x = 250;
    this.y = 250;
    this.color = color(random(255), random(255), random(255));
    this.xSpeed = random(-3, 3);
    this.ySpeed = random(-3, 3);
  }
  
  moveAndDisplay(){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 20, 20);
    // check to see if we are off screen
    if(this.x > width || this.x <0 || this.y > height || this.y < 0){
      return true;
    }
    return false;
  }
}