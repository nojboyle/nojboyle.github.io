// our video object
let capture;

let compareFrame;

let mergedFrame;

let randomAnimation;

function setup() {
  pixelDensity(1);
  createCanvas(960, 240);
  background(0);

  // start up our web cam
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

  compareFrame = createGraphics(320,240);
  compareFrame.pixelDensity(1);

  mergedFrame = createGraphics(320,240);
  mergedFrame.pixelDensity(1);

  randomAnimation = createGraphics(320,240);
  randomAnimation.pixelDensity(1);
  randomAnimation.background(128);


}

function draw() {

	randomAnimation.fill(random(255),random(255),random(255));
	randomAnimation.ellipse(random(320),random(240),40,40);

	capture.loadPixels();
	compareFrame.loadPixels();
	mergedFrame.loadPixels();
	randomAnimation.loadPixels();

	threshold = map(mouseX, 0, width, 0, 100);

	if(capture.pixels.length > 0) {

		console.log(capture.pixels.length);

		for (let i =0; i < capture.pixels.length; i += 4)
		{
			let d = dist(capture.pixels[i], capture.pixels[i+1], capture.pixels[i+2], compareFrame.pixels[i], compareFrame.pixels[i+1], compareFrame.pixels[i+2]);

			if (d < threshold) {
				mergedFrame.pixels[i] = 0;
				mergedFrame.pixels[i+1] = 0;
				mergedFrame.pixels[i+2] = 0;
				mergedFrame.pixels[i+3] = 255;
			}
			/*if (d < threshold) {
				mergedFrame.pixels[i] = randomAnimation.pixels[i];
				mergedFrame.pixels[i+1] = randomAnimation.pixels[i+1];
				mergedFrame.pixels[i+2] = randomAnimation.pixels[i+2];
				mergedFrame.pixels[i+3] = randomAnimation.pixels[i+3];
			}*/
			else {
				mergedFrame.pixels[i] = capture.pixels[i];
				mergedFrame.pixels[i+1] = capture.pixels[i+1];
				mergedFrame.pixels[i+2] = capture.pixels[i+2];
				mergedFrame.pixels[i+3] = capture.pixels[i+3];
			}
		}
	}

	mergedFrame.updatePixels();

	compareFrame.image(capture,0,0,320,240);

}

image(compareFrame, 0, 0);
image(capture, 320, 0);
image(mergedFrame, 640, 0);

/*function mousePressed() {

	compareFrame
}*/
