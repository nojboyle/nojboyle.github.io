let bg, ghostLeft, ghostRight, bat, screech;
let batX, batY;
let angle = 0;
let ghosts = [];


function preload(){
  bg = loadImage('images/background_spooky.jpg');
  ghostLeft = loadImage('images/ghost_left.jpg');
  ghostRight = loadImage('images/ghost_right.jpg');
  screech = loadImage('images/screech.jpg');
  bat = loadImage('images/bat.jpg');
}

function setup() {
  createCanvas(800, 450);
  batX = 700;
  batY = height/2;

  for (let i = 0; i <20; i++) {
    ghosts.push(new Ghost(random(-1000, 0), random(0, height)));
  }
}

function draw() {
  imageMode(CORNER);
  image(bg, 0, 0);

  for (let i = 0; i < ghosts.length; i++) {
    ghosts[i].move();
    ghosts[i].display();
  }

  imageMode(CENTER);
  push();

  translate(batX, batY);
  rotate(radians(angle));
  image(screech, 0, 0);

  pop();


  image(bat, batX, batY);

  if (keyIsDown(UP_ARROW)) {
    batY -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    batY += 5;
  }
  if (batY > height) {
    batY = 0;
  }
  if (batY < 0) {
    batY = height;
  }

  angle += 1;

}

class Ghost {

  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.speed = random(3, 6);
  }

  display(){
    if (this.speed > 0) {
      image(ghost_Right, this.x, this.y);
    }
    else {
      image(ghostLeft, this.x, this.y);
    }
  }

  move() {
    this.x += this.speed;

    if (this.x > width) {
      this.x = random(-1000, 0);
    }

    if (this.x < 0 && this.speed < 0) {
      this.x = random(-1000, 0);
    }

    if (dist(this.x, this.y, batX, batY) < 100){
      this.speed = -1* this.speed;
    }
  }

}
