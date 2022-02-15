// set up a variable to keep track of the noise location, x position on the graph
let theWalkers = [];

function setup() {
  createCanvas(500, 500);
  
  noiseDetail(24);
  
  for (let i = 0; i < 100; i++)
    {
      theWalkers.push(new NoiseWalker(250,250));
    }
  
}

function draw(){
  background(0, 20);
  
  for (let i = 0; i < theWalkers.length; i++)
    {
      theWalkers[i].moveAndDisplay();
    }
}

class NoiseWalker {
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    //pick a random spot on the curve to pull values from
    this.noiseLocationX = random(0,1000);
    
    this.noiseLocationY = random(1000,2000);
    
    // they are all born with a default color
    this.red = 128;
    this.green = 128;
    this.blue = 128;
  }
  
  
  moveAndDisplay(){
    // grab a value from the noise curve
    let num = noise(this.noiseLocationX); // 0-1
    // turn this into our x movement
    let xSpeed = map(num, 0, 1, -2, 2);
    
    let num2 = noise(this.noiseLocationY);
    
    let ySpeed = map(num2, 0, 1, -2, 2);
    
    // update position
    this.x += xSpeed;
    
    this.y += ySpeed;
    
    // see how far we are from the mouse
    let d = dist(this.x, this.y, mouseX, mouseY);
    if ( d <this.size / 2) {
      this.red = random(0, 255);
      this.green = random(0, 255);
      this.blue = random(0, 255);
      this.size -= 1;
    }
    else {
      this.size += 0.1;
    }
    this.size = constrain(this.size, 5, 30);
    fill(this.red, this.green, this.blue);
    
    noStroke()
    ellipse(this.x, this.y, this.size, this.size);
    
    // move ove to the next number on the graph
    this.noiseLocationX += 0.01;
    this.noiseLocationY += 0.01;
    
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
}

/* // set up a variable to keep track of the noise location, x position on the graph
let theWalkers = [];

function setup() {
  createCanvas(500, 500);
  
  noiseDetail(24);
  
  for (let i = 0; i < 100; i++)
    {
      theWalkers.push(new NoiseWalker(250,250));
    }
  
}

function draw(){
  background(0, 20);
  
  for (let i = 0; i < theWalkers.length; i++)
    {
      theWalkers[i].moveAndDisplay();
    }
}

class NoiseWalker {
  constructor(x, y){
    this.x = x;
    this.y = y;
    
    //pick a random spot on the curve to pull values from
    this.noiseLocationX = random(0,1000);
    
    this.noiseLocationY = random(1000,2000);
  }
  
  
  moveAndDisplay(){
    // grab a value from the noise curve
    let num = noise(this.noiseLocationX); // 0-1
    // turn this into our x movement
    let xSpeed = map(num, 0, 1, -2, 2);
    
    let num2 = noise(this.noiseLocationY);
    
    let ySpeed = map(num2, 0, 1, -2, 2);
    
    // update position
    this.x += xSpeed;
    
    this.y += ySpeed;
    
    // see how far we are from the mouse
    let d = dist(this.x, this.y, mouseX, mouseY);
    
    
    noStroke()
    ellipse(this.x, this.y, 50, 50);
    
    // move ove to the next number on the graph
    this.noiseLocationX += 0.01;
    this.noiseLocationY += 0.01;
    
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height);
  }
} */