// keep track of the position of our character
let x = 250;
let y = 250;

let coinX = 100;
let coinY = 100;

let points = 0;

function setup(){
  createCanvas(500,500);
}

function draw(){
  fill(255,255,0);
  ellipse(coinX,coinY,50,50);
}

function keyPressed() {
  console.log(keyCode);

  // A keyCode
  if (keyIsDown(65)){
    x-= 5;
  }
  if (keyIsDown (68)) {
    x += 5;
  }

  if (keyIsDown(87)){
    y -= 5;
  }

  if (keyIsDown(83)){
    y += 5;
  }
  fill(255);
  ellipse(x,y,50,50);

  let d=dist(x,y, coinX, coinY);
  text(d, 20, 20);

  if(d <50){
    text("HIT", width/2, height/2);
    points += 1;

    // teleport the coin somewhere else {
      coinX = random(0, width);
      coinY = random(0, height);
    }
  }
