let artwork;
let presents = [];
let sledart;
let pres1, pres2, pres3, pres4, pres5;
let randindex;
let totalpoints = 0;
let randpoint;
let randdirection;
let mode = 0;
let mouseindex = 0;
let moveindex = -50;

function preload() {
  artwork = loadImage('winter_background.png');
  sledart = loadImage('sled.png');
  pres1 = loadImage('present1.png');
  pres2 = loadImage('present1.png');
  pres3 = loadImage('present1.png');
  pres4 = loadImage('present1.png');
  pres5 = loadImage('present1.png');
}

function setup() {
  createCanvas(800, 600);
  image(artwork, 0, 0);
  for(let i =0; i < 20; i++)
  {
    randindex = int(random(0,4));
    randpoint = int(random(1,5));
    randdirection = int(random(1,3));
    moveindex = randdirection;
    console.log(randdirection);

    let  temp = new Present(width-100 + moveindex, 0, randdirection, randindex, randpoint);
    presents.push(temp);
  }
  mode = 1;
}

function draw() {
  image(artwork, 0, 0);
  if (mode == 1)
  {
  fill(0);
  textSize(20);
  text("Points: " + totalpoints, 800/2 - 30, height/2 + 50);
  
  
  image(sledart, 800/2 - 90, height/2 - 110);
  if (mouseindex == 1)
  {
    fill(255,255,0,90);
    noStroke();
    ellipse(mouseX,mouseY,200,200);
  }

  for (let i = 0; i < presents.length; i++)
  {
      presents[i].display();
      presents[i].move();
      presents[i].move2();
  }

  for (let a = 0; a < presents.length; a++)
  {
    let dd = dist(mouseX, mouseY, presents[a].x, presents[a].y);
    if (dd < 50)
    {
      totalpoints += 200; 
    }
  }

  if(totalpoints >= 200)
  {
    mode = 2;
  }

  }
  if (mode == 2)
  {
    fill(255,0,0);
    textSize(20);
    text("YOU WIN! Happy Holidays!", 800/2 - 30, height/2 + 50);
  }
  
}

function mousePressed() {
  mouseindex = 1;
}

function mouseReleased() {
  mouseindex = 0;
}

class Present 
{
  constructor(x, y, direction, img, val)
  {
    this.x = x;
    this.y = y;
    this.xSpeed = 2;
    this.ySpeed = 1;
    this.dir = direction;
    this.imgIndex = img;
    this.pointval = val;
    this.currentImage = pres1;
    this.moveindex = 0;
  }
  display()
  {
    if(this.imgIndex == 0)
    {
      this.currentImage = pres1;
    }
    if(this.imgIndex == 1)
    {
      this.currentImage = pres2;
    }
    if(this.imgIndex == 2)
    {
     this.currentImage = pres3; 
    }
    if(this.imgIndex == 3)
    {
      this.currentImage = pres4;
    }
    if(this.imgIndex == 4)
    {
     this.currentImage = pres5; 
    }
    image(this.currentImage, this.x, this.y);
    fill(0);
    text(this.pointval, this.x, this.y-10);
  }
  move()
  {
    if(this.dir == 1)
    {
      this.x = 800; 
      this.y = 50;
      this.moveindex = 1;
     
    }
    if(this.dir == 2)
    {
      this.x = 0
      this.y = 600 - 50;
      this.moveindex = 2;
    }
  }
  move2()
  {
    if(this.moveindex == 1)
    {
      this.x += this.xSpeed;
    }
    if(this.moveindex == 2)
    {
      this.x -= this.xSpeed;
    }
    if(this.dir == 0 && this.x < -20)
    {
      this.dir = random(0,1);
      this.xSpeed = random(2,5); 
    }
    if(this.dir == 1 && this.x > 850)
    {
      this.dir = random(0,1);
      this.xSpeed = random(2,5); 
    }
  }
}

