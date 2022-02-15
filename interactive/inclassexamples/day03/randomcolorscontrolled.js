function setup() {
  createCanvas(500, 500);
}

function draw() {

  if (mouseIsPressed == true) {

  let x = random(0,width);
  let y = random(0,height);

  let size = random(5, 20);

  fill(random(255),random(255),random(255),random(20,100));

  noStroke();
  ellipse(mouseX + random(-50, 50),mouseY +random(-50,50),size,size);

  }

}

function mousePressed(){

}

function keyPressed(){
  //ask the browser to save the user's drawing

}
