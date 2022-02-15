// not bound to any function, they are global
let circleCenterX = 250;
let circleCenterY = 250;

function setup() {
  createCanvas(500, 500);

}

function draw() {

  ellipse(circleCenterX, circleCenterY, 100, 100);

  circleCenterX += 0.5;
  circleCenterY += 0.5;

  ellipse(circleCenterX, circleCenterY, 100, 100);
}
