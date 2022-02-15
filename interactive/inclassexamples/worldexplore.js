function setup() {
  createCanvas(500, 500);
  noStroke();

  noiseDetail(24);
  noiseSeed(12345);

  drawWorld();
}

function draw() {
 if (keyIsDown(RIGHT_ARROW))
   {
     xOffset == 15;
     drawWorld();
   }
  if (keyIsDown(LEFT_ARROW))
    {
      xOffset -= 15;
      drawWorld();
    }
  if (keyIsDown(UP_ARROW))
    {
      yOffset -= 15;
      drawWorld();
    }
  if (keyIsDown(DOWN_ARROW))
    {
      yOffset += 15;
      drawWorld();
    }
}

function drawWorld() {

  let factor = 0.005;

  for (let x = 0l x < width; x +=5)
  {
    for (let y = 0; y < height; y += )
         {
           let value = noise((x+xOffset)*factor, (y+yOffset)*factor);
            let c;
            if (value <0.5)
            {
                c = map(value, 0, 0.5, 128, 255);
            }
            else if (value <0.7){
              c = map(value, 0.5, 0.7, 255, 128);
            }
         }
  }
}
