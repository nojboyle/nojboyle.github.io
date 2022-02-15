// create a variable for A-Frame world
let world;

// references to our markers (which are defined in the HTML document)
let hiroMarker;

// how long has each marker been visible?
let hiroVisCount = 0;

// global flag to keep track of whether we should track new markers
// (we can pause this when there's an overlay visible)
let tracking = true;

function setup() {
  world = new World("ARScene");

  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
}

function draw() {

  // if we are in tracking mode
  if (tracking) {

    // see which markers are visible
    // update their visibility counters as needed
    if (hiroMarker.isVisible()) {
      hiroVisCount++;
      console.log(hiroVisCount);
    }
    else {
      hiroVisCount=0;
    }

    // if a marker has been visible for a certain # of consecutive frames we can
    // make it visible - this prevents tracking errors from interfering with your
    // overall experience
    
    if (hiroVisCount > 15) {
      tracking = false;
    }
  }

}