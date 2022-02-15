let sky;

let sky1 = 0;
let sky2 = 1024;

function preload() {
  sky = loadImage('background2.png');
}

function setup() {
  createCanvas(576, 1024);
}

function draw() {
  background(128);

  image(sky, 0, sky1);
  image(sky, 0, sky2);


  sky1 -= 2;
  sky2 -= 2;

  if (sky1 <= -1024) {
    sky1 = sky2 + 1024;
  }
  if (sky2 <= -1024) {
    sky2 = sky1 + 1024;
  }
}
