// load the graphic variables
let beeber;
let bee1,bee2;

function preload() {
  beeber = loadImage("images/beeber.png");

}

function setup() {
  createCanvas(500, 500);

  bee1 = new Beeber(100,100, "Bee #1");
  bee2 = new Beeber(300,300, "Bee #2");
}

function draw() {
  background(128);

  bee1.display();
  bee2.display();

}
// create a CLASS to model a Beeber object
class Beeber {
  // constructor (think of this like a setup function)

  constructor(x, y, name) {
    // commit this info to our object
    this.x = x;
    this.y = y;
    this.name = name;
  }

  display(){
    // have the beeber display itself
    image(beeber, this.x, this.y);
    text(this.name, this.x, this.y-30);
    // have the bee jitter a little bit
    this.x += random(-1,1);
    this.y += random(-1,1);
  }
}
