// array to hold our walkers
let theWalkers = [];

function setup() {
  createCanvas(500, 500);

  // create 200 walkers
  for (let i = 0; i < 200; i++) {
    let temp = new RandomWalker(250, 250);

    // put this walker into our array
    theWalkers.push( temp );
  }
}

function draw() {
  background(0, 50);

  // visit our walkers and ask them to display / move themselves
  for (let i = 0; i < theWalkers.length; i++) {
    theWalkers[i].move();
    theWalkers[i].display();
  }
}

class RandomWalker {

  constructor(x,y) {
    // walkers know where they exist and compute their own speed
    this.x = x;
    this.y = y;
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(-1, 1);

    // walkers know their own size
    this.size = 30;

    // walkers also know how far the mouse is (computed in the move function)
    this.d = 0;

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
    ellipse(this.x, this.y, this.size, this.size);

    // is the mouse touching us?
    if (this.d < 15) {
      this.color = color( random(255), random(255), random(255) );
      this.size--;
    }
    else {
      this.size += 0.1
    }

    // make sure we don't get too big or too small!
    this.size = constrain(this.size, 0, 30);
  }

  // move our walker
  move() {
    // how far away is the mouse?
    let d = dist(mouseX, mouseY, this.x, this.y);

    // ... let's store it so we don't have to compute it again when we display
    // the walker
    this.d = d;

    // if we are close we should run away and ignore our existing speed
    if (d < 100) {
      // "flee" state
      if (mouseX > this.x) {
        this.x -= 2;
      }
      if (mouseX < this.x) {
        this.x += 2;
      }
      if (mouseY > this.y) {
        this.y -= 2;
      }
      if (mouseY < this.y) {
        this.y += 2;
      }
    }
    else {
      // "normal" state
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
}
