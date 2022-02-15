// set up a variable to keep track of the noise location, x position on the graph
let noiseLocation = 0;

function setup() {
  createCanvas(400, 400);
  
}

function draw(){
  background(128);
  let num = noise(noiseLocation);
  
  // turn the noise float into a size for our ellipse
  let size = map(num, 0, 1, 50, 200);
  
  
  noiseLocation+= 0.01;
  
  console.log(num);
  
  textSize(50);
  text(num, 50,50);
  
  ellipse(250,250,size,size);
}

class NoiseWalker {
  constructor(x, y)
}