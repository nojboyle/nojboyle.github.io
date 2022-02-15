// video capture object
let capture;

function setup() {
  pixelDensity(1);
  createCanvas(640, 480);

  // startup our video
  capture = createCapture({
                            video: {
                                    mandatory: {
                                                minWidth: 320,
                                                minHeight: 240,
                                                maxWidth: 320,
                                                maxHeight: 240
                                              }
                                   }
                          });
  capture.hide();

  noStroke();
}

function draw() {
  background(0);

  // first make sure the video is actually loaded and ready to go
  capture.loadPixels();
  if (capture.pixels.length > 0) {
    // draw our video image
    image(capture, 0, 0);

    // grab pixel data if we are hovering over the image
    if (mouseX >= 0 && mouseX <= 320 && mouseY >= 0 && mouseY <= 240) {
      // debugging info to see what pixel we are looking out
      fill(255);
      text( "Mouse position: " + mouseX + ", " + mouseY, 20, 250);
      let location = (mouseX + mouseY*capture.width) * 4;
      text( "1D Array location:" + location, 20, 270 );
      text( "2D X position: " + int( (location/4) % width), 20, 290 );
      text( "2D Y position: " + int( (location/4) / width), 20, 310 );

      let r = capture.pixels[location];
      let g = capture.pixels[location+1];
      let b = capture.pixels[location+2];

      text( "RGB: " + r  + ", " + g + ", " + b, 20, 330);

      fill(r,g,b)
      ellipse(480, 120, 100, 100)
    }

  }
}
