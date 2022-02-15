// create a var to hold the images
let scene;
let f1;
let f2;
let f3;
// preload artwork
function preload(){
  scene = loadImage('images/scene.jpg');
  f1 = loadImage('images/flower-1.png');
  f2 = loadImage('images/flower-2.png');
  f3 = loadImage('images/flower-3.png');
}

function setup(){
  createCanvas(800,600);
  // draw the background of the beach
  image(scene,0,0);

}

function draw(){

}
function mousePressed(){
  let chance = random();
  if (chance > 0.66){
    image(f1, mouseX, mouseY, 50, 100);
  }
  else if (chance > 0.33){
    image(f2, mouseX, mouseY, 50, 100);
  }
  else {
    image(f3, mouseX, mouseY, 50, 100);
  }

  // plant a flower

}
