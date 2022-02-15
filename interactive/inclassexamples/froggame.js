// artwork for the game
let artFrogLeft, artFrogRight, artFrogUp, artFrogDown;
let artBackground;
let artCar1, artCar2, artCar3;

// global var for our player
let player;

// global vars for our cars
let car1, car2, car3;

function preload() {
  artBackground= loadImage("images/background.png");
  artFrogUp = loadImage("images/frog_up.png");
}

function setup() {
  createCanvas(500, 500);

  // create our player
  player = new Frog(width/2, height-50);

  car1 = new Car(0, height-100, 3, artCar1);
  car2 = new Car(0, height-150, 2, artCar2);
  car3 = new Car(0, height-200, 1, artCar3);
}

function draw() {
  image(artBackground, 0, 0);
  // ask the player to display itself
  player.display();
  player.move();

  //move and display our cars
  car1.display();
  car1.move();
  car2.display();
  car2.move();
  car3.display();
  car3.move();
}


class Car {

  constructor(x, y, speed, artwork) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.artwork = artwork;
  }

  display() {
    image(this.artwork, this.x, this.y);
  }

  move() {
    this.x += this.speed;
    if (this.x > width) {
      this.x = -this.artwork.width;
    }

    stroke(255);
    line(this.x+this.artwork.width/2, this.y+this.artwork.height/2, player.x+player.currentImage.width/2, player.y+player.currentImage.height/2);

    let d = dist(this.x+this.artwork.width/2, this.y+this.artwork.height/2, player.x+player.currentImage.width/2, player.y+player.currentImage.height/2);
    fill(255);
    text(d, this.x, this.y-10);
    if (d <50) {
      player.reset();
    }
  }
}


class Frog {

  constructor(x, y){
    // commit our position to our object
    this.x = x;
    this.y = y;
    this.currentImage = artFrogUp;
    this.startingX = x;
    this.startingY = y;
    this.currentImage = artFrogUp;
  }

  reset() {
    this.x = this.startingX;
    this.y = this.startingY;
  }

  display() {
    image(this.currentImage, this.x, this.y);
  }

  move() {
    if (keyIsDown(UP_ARROW)) {
      this.y -= 5;
      this.currentImage = artFrogUp;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 5;
      this.currentImage = artFrogDown;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
      this.curerntImage = artFrogRight;
    }
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
      this.currentImage = artFrogLeft;
    }

    }
}
