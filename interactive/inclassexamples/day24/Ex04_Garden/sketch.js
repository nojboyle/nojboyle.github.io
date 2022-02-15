// create a variable to hold our world object
let world;

// create a variable to hold our marker
let marker1;
let marker2;

// graphics buffer to hold our scene
let scene;

// flowers
let flowers = [];

function setup() {
  // create our world (this also creates a p5 canvas for us)
  world = new World('ARScene');

  // grab a reference to the markers that we set up on the HTML side (connect to it using its 'id')
  marker1 = world.getMarker('hiro');
  marker2 = world.getMarker('zb');

  // create our graphics buffer
  scene = createGraphics(320,240);
}


function draw() {

  // clear the drawing canvas
  world.clearDrawingCanvas();

  // clear the scene canvas
  scene.clear();
  scene.noStroke();
  scene.background(0,0,255,100);
  scene.fill(0,255,0,100);
  scene.rect(0,200,320,40);

  // detect if our markers are visible and do something if they are
  if (marker1.isVisible()) {
    // draw a sun
    scene.fill(255,255,0);
    scene.ellipse(scene.width,0,100,100);

    // make our flowers grow
    for (let i = 0; i < flowers.length; i++) {
      flowers[i].grow();
    }
  }

  if (marker2.isVisible() && frameCount % 30 == 0) {
    // add a flower to the world
    flowers.push( new Flower(random(0, 320), 200) );
  }

  // display our flowers
  for (let i = 0; i < flowers.length; i++) {
    flowers[i].display();
  }

  // draw our small garden in the middle of the screen
  // note that we can do some math to figure out the actual size of the window to
  // scale it up using window.innerWidth and window.innerHeight
  imageMode(CENTER);
  image(scene, width/2, height/2);

}

class Flower {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.maxSize = random(100,150);
    this.myColor = color(random(255), random(255), random(255));
  }

  grow() {
    this.size += 1;
    this.size = constrain(this.size, 0, this.maxSize);
  }

  display() {
    scene.strokeWeight(1);
    scene.stroke(0);
    scene.line(this.x, this.y, this.x, this.y - this.size);
    scene.fill(this.myColor);
    scene.ellipse(this.x, this.y - this.size, 20, 20);
  }

}
