// ref to the canvas

let cnv;
let previousImage;

function preload() {
  let previousData =
      window.localStorage.getItem('previousPicture');
  if (previousData) {
    previousImage = loadImage(previousData);
  }
}

function setup() {
  cnv = createCanvas(500, 500);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
  }

function mouseReleased() {
  console.log("mouse was released");

  // grab the raw data that describes the canvas
  let rawPNG = cnv.elt.toDataURL();
  console.log(rawPNG);

  localStorage.setItem('previousPicture', rawPNG);
}
}
