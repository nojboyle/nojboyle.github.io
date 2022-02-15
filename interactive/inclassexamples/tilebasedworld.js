let artwork;
let tileSize = 32;
let player;

let offsetX = 0;
let offsetY = 0;

// define a world that the user will move around in
let world = [
  [1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162],
  [1162, 1101, 1101, 1101, 1101, 1101, 1101, 1101, 1101, 1162],
  [1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162],
  [1162, 1101, 1101, 1101, 1101, 1101, 1101, 1101, 1101, 1162],
  [1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162, 1162],
  [1162, 1101, 1101, 1101, 1101, 1101, 1101, 1101, 1101, 1162],

];

let overlay =
    [
      [-1, -1, -1, -1, -1 ,-1 ,-1 ,-1 ,-1 ,-1],
      [-1, 6, -1, -1, -1 ,-1 ,-1 ,-1 , 6 , -1],
      [-1, -1, -1, -1, -1 ,-1 ,-1 ,-1 ,-1 ,-1],
      [-1, -1, -1, -1, -1 ,-1 ,-1 ,-1 ,-1 ,-1],
      [-1, 6, -1, -1, -1 ,-1 ,-1 ,-1 , 6,  -1],
      [-1, -1, -1, -1, -1 ,-1 ,-1 ,-1 ,-1 ,-1],
    ]

function preload()
{
  artwork = loadImage('ProjectUtumno_full.png');
}

function setup() {
  createCanvas(320, 320);
  drawWorld();
  /*drawTile(1, 0, 0);
  drawTile(64, 0, 32);
  drawTile(6, 0, 64);*/
}

function draw() {
  push();
  drawWorld();
  player.move();
  player.display();
  pop();
}


function getTileAtPosition(screenX, screenY){
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
  let id = world[arrayY][arrayX];
  console.log(id);
}

class Player{


constructor(x, y){
  this.x = x;
  this.y = y;
  this.speed = 2;
}

display() {
  drawTile(3934, this.x, this.y);
}

updateSensors() {
  this.middleX = this.x + tileSize /2;
  this.middleY = this.y + tileSize /2;
  this.left = this.x - 2;
  this.right = this.x + tileSize + 2;
  this.up = this.y -2;
  this.down = this.y + tileSize + 2;
}

move() {
  this.updateSensors();

  let overlayId = getOverlayTileAtPosition(this.middleX, this.middleY);

  if (overlayId == 6){
    console.log("TREASURE!");
    setOverlayItemAtPosition(this.middleX, this.middleY -1);
  }


  if (keyIsDown(LEFT_ARROW))
    {
      ellipse(this.left, this.middleY, 5, 5);
      this.x -= this.speed;
    }
  if (keyIsDown(RIGHT_ARROW))
    {
      ellipse(this.right, this.middleY, 5, 5);
      let id = getTileAtPosition(this.right, this.middleY);
      if(Solid)
      this.x += this.speed;
    }
  if (keyIsDown(UP_ARROW))
    {
      ellipse(this.middleX, this.up, 5, 5);
      this.y -= this.speed;
    }
  if (keyIsDown(LEFT_ARROW))
    {
      ellipse(this.middleX, this.down, 5, 5);
      this.y += this.speed;
    }
}

}

function drawWorld() {
  for (let y=0; y < world.length; y++)
  {
    for (let x = 0; x < world[y].length; x++)
      {
        drawTile(world[y][x], x*tileSize, y*tileSize);

        if(overlay[y][x] != -1)
          {
            drawTile(overlay[y][x], x*tileSize, y*tileSize);
          }
      }
  }
}


function setOverlayItemAtPosition(screenX, screenY, id){
  let arrayX = int(screenX / tileSize);
  let arrayY = int(screenY / tileSize);
}

function isSolid(id)
{
  if (id == 1162)
    {
      return true;
    }
  return false;
}

function drawTile(id, x, y)
{
  let tilesPerRow = int (artwork.width / tileSize);
  // figure out the x & y position in the large graphic
  let imageX = int(id % tilesPerRow) * tileSize;
  let imageY = int(id / tilesPerRow) * tileSize;

  // draw the tile!
  image(artwork, x, y, tileSize, tileSize, imageX, imageY, tileSize, tileSize);


}
