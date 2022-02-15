// Noah Boyle
// Assignment #2: "Moon-Breaker" brick-breaker game using p5.js

let background;
let moon;

let moonx1= 0;
let moonx2= 1024;

function preload(){
  bg = loadImage('seamless_background.png');
}

function setup(){
  createCanvas(1024, 576)
}

function draw(){
  background(128);
  image(bg,moonx1, 0);
  image(bg,moonx2, 0);

  moonx1 -= 5;
  moonx2 -= 5;

  if (moonx1 <= -1024){
    moonx1 = moonx2 + 1024;
  }

  if (moonx2 <= -1024){
    moonx2 = moonx1 + 1024;
  }
}
