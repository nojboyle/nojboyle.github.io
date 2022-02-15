// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker1;
let marker2;

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the marker that we set up on the HTML side (connect to it using its 'id')
  marker1 = world.getMarker('hiro');
}


function draw() {

  // clear the drawing canvas
  world.clearDrawingCanvas();

  // detect if our markers are visible and do something if they are
  if (marker1.isVisible()) {
    // get marker position
    let pos = marker1.getScreenPosition();

    // draw an ellipse here
    fill(255,255,0);
    ellipse(pos.x, pos.y, 20, 20);
  }

}
