// Noah Boyle
// Midterm exam

let batimage;
let candycornimage;
let ghostLeft;
let ghostRight;
let backgroundg;
let lollypopimage;
let pumpkinimage;
let player;
let pumpkins;
let candyparticles = [];
let angle = 0;
let points = 0;
let startAngle;
let imageindex;


function preload()
{
  backgroundg = loadImage("background_spooky.jpg");
  ghostLeft = loadImage("ghost_left.png");
  ghostRight = loadImage("ghost_right.png");
  pumpkinimage = loadImage("pumpkin_normal.png");
  lollypopimage = loadImage("lollypop.png");
  candycornimage = loadImage("candy_corn.png");
  batimage = loadImage("bat.png");
}

function setup()
{
  noCursor();
  canvas = createCanvas(800, 450);
  player = new usercontrolled(width/2, height/2);
  pumpkins = new pumpkinspawner(350, 175);
  noiseDetail(24);
  for (let i = 0; i < 100; i++) {
    candyparticles.push( new trickortreat(pumpkins.x, pumpkins.y, startAngle) );
    while (i == candyparticles.length)
    {
      candyparticles.push( new trickortreat(pumpkins.x, pumpkins.y, startAngle) );
    }
  }
}

function draw()
{
  image(backgroundg, 0, 0);
  angle += 0.1;
  fill(255);
  textSize(30);
  text("Points:" + points, 10, 25);
  startAngle = random(1, 365);
  pumpkins.display();
  player.display();
  player.move();
  player.totalpoints();
  for (let i = 0; i < 100; i++) {
    candyparticles[i].display();
    candyparticles[i].move();
  }

}

class usercontrolled
{
  constructor (x, y)
  {
    this.x = x;
    this.y = y;
    this.startingX = this.x;
    this.startingY = this.y;
    this.currentImage = ghostLeft;
  }
  display()
  {
    image(this.currentImage, this.x, this.y);
  }
  move()
	{
    this.x = mouseX;
    this.y = mouseY;
    if (this.x < this.startingX)
		{
			this.currentImage = ghostLeft;
		}
		else if (this.x > this.startingX)
		{
			this.currentImage = ghostRight;
		}
	}
  totalpoints()
  {
    if (this.x == candyparticles.x)
    {
      points +=1
    }

    if (points == 25)
    {
      text("You Win Halloween!", width/2, height/2);
    }
  }
}

class pumpkinspawner
{
  constructor (x, y)
  {
    this.x = x;
    this.y = y;
    this.currentImage = pumpkinimage;
  }
  display()
  {
    image(this.currentImage, this.x, this.y);
  }
  spawn()
  {
    
  }
}

class trickortreat
{
  constructor(startX, startY, startAngle)
  {
    this.x = startX;
    startY = random(20, 30);
    this.y = random(20, 30);
    this.y = startY;
    this.angle = random(1, 365);
    this.angle = startAngle;
    this.currentImage = candycornimage;
  }
  display()
  {
    image(this.currentImage, this.x, this.y);
    imageindex = random (1, 100);
    if (imageindex <=10)
    {
      this.currentImage = batimage;
    }
    if (imageindex <=90)
    {
      this.currentImage = lollypopimage;
    }
    else {
      {
        this.currentImage = candycornimage;
      }
    }
  }
  move()
  {
    if (this.x <= width)
    {
      this.x += 3;
    }
    if (this.y <= height)
    {
      this.y += 3;
    }
  }
}
