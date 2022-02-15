let artwork;

function preload() {
  // load our artwork
  artwork = loadImage('images/monalisa.jpg');  // 200 x 300
}

let buffer;

function setup() {
  pixelDensity(1);
  createCanvas(640, 480);
  buffer = createGraphics(3,3);
  buffer.background(255,0,0);
  image(buffer, 0, 0);
}

function draw() {

}

function mousePressed() {
  buffer.loadPixels();
  console.log(buffer.pixels.length / 4);
  console.log(buffer.width, buffer.height);
  console.log(buffer.pixels);
}
