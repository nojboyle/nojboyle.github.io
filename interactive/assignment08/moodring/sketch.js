// Noah Boyle
// Interactive Computing Assignment #8: AR Painting Program based off of video feed
tracking = true;

function setup() {
  world = new World("ARScene");
  createCanvas(500,500);
  videoreference=createCapture(VIDEO);
  videoreference.hide();
  background(0);
  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
  
}
function draw() {
  if (tracking)
  {
    if (hiroMarker.isVisible()) {
      
        for(let i=0;i<100;i++)
        {
          let videoreferencex= random(width);
          
          let videoreferencey=random(height);
          let reference=videoreference.get(videoreferencex,videoreferencey);
          noStroke();
          fill(reference,25);
          ellipse(videoreferencex,videoreferencey,16,16);
        }
    }
  }
}
