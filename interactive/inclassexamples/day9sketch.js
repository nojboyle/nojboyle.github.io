function preload(){

}

function setup() {
  createCanvas(500,500);

  for (let i =0; i < 100; i++) {
    let temp = new Thingy(random(0,width),
        random(0,height));

    temp.display();
  }

  let test2= new Thingy(150,75);
  console.log(test2);
  test2.display();
  /*
  let test = {
  x: 200,
  y: 200,
  radius: 50,
  red: 255,
  blue: 0,
  green: 0,
  display: function() {
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.radius, this.radius);
    }
  };

  test.display();*/
}

function draw(){

}

class Thingy {

  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;

    this.radius = random(25,75);

    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  // give this thing the ability to display itself create a second function after the keyword, class will automatically interpret it as a function
  display() {
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}
