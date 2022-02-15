// create a var to hold the image
let artwork;

// preload all of our artwork
function preload(){
  artwork = loadImage('images/chicken.png');
}

function setup(){
  createCanvas(500,500);
  background(0);

  // load the graphic
  image(artwork, 50, 50);
}

function draw(){


  console.log(artwork.width, artwork.height);
}
