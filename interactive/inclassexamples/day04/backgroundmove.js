let artwork;

// keep track of art location
let x1= 0;
let x2= 1024;

function preload(){
  artwork = loadImage('layer05.png');
}

function setup() {
  createCanvas(1024, 576);
}

function draw() {
  background(128);
  image(artwork, x1, 0);
  image(artwork, x2, 0);

  x1 -= 5;
  x2 -= 5;


  if (x1 <= -1024) {
    x1 = x2 + 1024;
    console.log("cycle1");
  }

  if (x2 <= -1024) {
    x2 = x1 + 1024;
    console.log("cycle2");
  }



}
