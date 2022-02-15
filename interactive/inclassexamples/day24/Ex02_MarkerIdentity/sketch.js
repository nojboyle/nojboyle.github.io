// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker1;
let marker2;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the markers that we set up on the HTML side (connect to it using its 'id')
  marker1 = world.getMarker('hiro');
  marker2 = world.getMarker('zb');
}


function draw() {

  // clear the drawing canvas
  world.clearDrawingCanvas();

  // detect if our markers are visible and do something if they are
  if (marker1.isVisible()) {
    fill(128);
    textSize(50);
    textAlign(CENTER);
    text("Marker 1 is visible", width/2, height/2);
  }

  if (marker2.isVisible()) {
    fill(128);
    textSize(50);
    textAlign(CENTER);
    text("Marker 2 is visible", width/2, height/2+50);
  }

}
