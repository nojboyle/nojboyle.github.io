// Noah Boyle
// Midterm Project: Mystery Maze
let overlay = [];
let offsetX;
let offsetY;
let player;
let playeridle, playerup, playerdown, playerright, playerleft, playerattack, playerdead;
let tileSize;
let element = "";
let tileimage;
let health = 10;
let alive = 1;
let experience = 0;
let level = 1;
let world = [
	[1,2,3],
	[4,5,6]
];

function preload()
{
	tileimage = loadImage('spritesheet1.png');
	playeridle = loadImage('idle.png');
	playerup = loadImage('upmove.gif');
	playerdown = loadImage('downmove.gif');
	playerright = loadImage('rightmove.gif');
	playerleft = loadImage('leftmove.gif');
	playerattack = loadImage('');
	playerdead = loadImage('dead1.png');
}

function setup() {
	createCanvas(1000,1000);
}

function draw()
{
	background(255);
}

function drawWorld() {

}

class Protagonist
{
	constructor(x,y)
	{
		this.x = x;
		this.y = y;
		this.startingx = x;
		this.startingy = y;
		this.xspeed = 
		this.currentImage = playeridle;
	}
	move()
	{
		if (keyIsDown(UP_ARROW) && health >= 10 && alive == 1)
		{
			this.y += 3;
			this.currentImage = playerup;
		}
		if (keyIsDown(DOWN_ARROW) && health >= 10 && alive ==1)
		{
			this.y -= 3;
			this.currentImage = playerdown;
		}
		if (keyIsDown(LEFT_ARROW) && health >= 10 && alive ==1)
		{
			this.x -= 3;
			this.currentImage = playerleft;
		}
		if (keyIsDown(RIGHT_ARROW) && health >= 10 && alive ==1)
		{
			this.x -= 3;
			this.currentImage = playerright;
		}
	}
	hitDetection()
	{
		let d = dist(this.x, this.y, world[55].x, world[55].y)
		if (d < 20)
		{
			health -= 3.5;
		}
	}
	gameOver()
	{
		if (health <=0)
		{
			alive = 0;
			this.currentImage = playerdead;
			fill(128);
			stroke(255);
			rect(100, 100, 200, 200);
			text("GAME OVER", 100, 100);
		}
	}
	levelCounter()
	{

	}
}

class elementparticle
{
	constructor(x, y, classification)
	{
		this.x = x;
		this.y = y;
		this.classification = element;
	}
	display()
	{
		if (element == "fire")
		{
			noStroke();
			fill(255, 0, 0);
			ellipse(this.x,this.y,20,20);
		}
		if (element == "earth")
		{
			noStroke();
			fill(255, 255, 255);
			ellipse(this.x,this.y,20,20);
		}
		if (element == "water")
		{
			noStroke();
			fill(255, 0, 0);
			ellipse(this.x,this.y,20,20);
		}
		if (element == "air")
		{
			noStroke();
			fill(255, 0, 0);
			ellipse(this.x,this.y,20,20);
		}
	}
}