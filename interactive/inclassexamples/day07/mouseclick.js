let clicks = 0;

function setup() {
  createCanvas(500, 500);
  background (0);

  // when the progam loads look into localStorage
  let previousClicks = window.localStorage.getitem('clicks');
  if (previousClicks) {
    // overwrite the local variable clicks with the value
    clicks = int(previousClicks);
  }
  console.log("starting up with ... ", previousClicks);
}

function draw() {
  background(0);

  fill(255);
  textAlign(CENTER,CENTER);
  textSize(50);
  text(clicks, width/2, height/2);
}

function mousePressed(){
  clicks +=1;
  // put this number into the browser's localStorage container
  window.localStorage.setItem('clicks', clicks);
}
