let level, hitMap;
let player;

function preload(){
  level = loadImage('level.png');
  hitMap = loadImage('level_hitmap.png');
}

function setup() {
  createCanvas(500, 500);
  background(255);
  player = new Player();
}

function draw() {
  image(level, 0, 0);
}

class Player {
  constructor() {
    this.x = width/2;
    this.y = height/2;
    this.size = 25;
  }
  display() {
    rect(this.x, this.y, this.size, this.size);

    if (keyIsDown(RIGHT_ARROW)){
      // grab the pixel color to the right from the HIT MAP
      let c = red(hitMap.get(this.x + this.size + 2, this.y + this.size/2));
      ellipse(this.x + this.size + 2, this.y + this.size/2, 5, 5);
       if (c == 255) {
      this.x -= 3;
    }
    }

  }
}
