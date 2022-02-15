let george;
let christine;
let pikachu;

let collection = [];

function setup() {
  createCanvas(400, 400);

  george = new Ball();
  christine = new Ball();
  pikachu = new Ball();

  for (let i = 0; i < 100; i++){
    let tempObject = new Ball();
    collection.push(tempObject);
  }

  george.display();
  christine.display();
}

function draw() {
  background(255);

  george.move();
  christine.move();
  george.display();
  christine.display();
}

class Ball {
  //constructor function which is called when we use the class to create a new object
  counstructor() {

    this.x=random(0, width);
    this.y=random(0, height);

    this.speedX = random(1,5);
    this.speedY = random(1,5);

    this.red = random(0, 255);
    this.green = random(0,255);
    this.blue = random(0, 255);
  }

  display(){
    fill(128);
    ellipse(this.x, this.y, 20, 20);
  }

  move(){
    this.x += this.speedX;

    if (this.x > width || this.x < 0){
      this.speedX *= -1;
    }
  }
}
