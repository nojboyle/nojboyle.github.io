// variables for 3 walkers
let walker1, walker2, walker3;

function setup() {
  createCanvas(500, 500);

  // create 3 random walkers
  walker1 = new RandomWalker(250, 250);
  walker2 = new RandomWalker(250, 250);
  walker3 = new RandomWalker(250, 250);
}

function draw() {
  background(200);

  // move and display our walkers
  walker1.move();
  walker1.display();
  walker2.move();
  walker2.display();
  walker3.move();
  walker3.display();
}

class RandomWalker {

  constructor(x,y) {
    // walkers know where they exist and compute their own speed
    this.x = x;
    this.y = y;
    this.xSpeed = random(-4, 4);
    this.ySpeed = random(-4, 4);

    // walkers also keep track of how long they have been moving in a
    // given direction. we can use this info to switch directions at
    // some point in the future
    this.timeInState = 0;
    this.timeToSwitch = int(random(100,200));

    // walkers remember their color (note the user of the 'color' function
    // here to package up a RGB triple into a single color value (integer) )
    this.color = color( random(255), random(255), random(255) );
  }

  // display our walker
  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, 30, 30);
  }

  // move our walker
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // wrap around logic
    if (this.x > width) {
      this.x = 0;
    }
    if (this.x < 0) {
      this.x = width;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }

    // advance the # of frames we've been in our state
    this.timeInState += 1;

    // if we've exceeded how long we should stay in this state
    // we should pick a new direction and reset our timer
    if (this.timeInState >= this.timeToSwitch) {
      this.xSpeed = random(-4, 4);
      this.ySpeed = random(-4, 4);
      this.timeInState = 0;
      this.timeToSwitch = int(random(100,200));
    }
  }
}
