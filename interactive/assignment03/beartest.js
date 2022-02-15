let bearright, bearleft;

function preload(){
	bearright = loadImage('bearright.gif');
	bearleft = loadImage('bearleft.gif');
}

function setup(){
	createCanvas(500, 1600);
	bear1 = new evilbear1(50, 50, 2);
	bear2 = new evilbear1(100, 100, 5);
	bear3 = new evilbear1(50, 500, 10);
	}


function draw(){
	background(255);
	bear1.display();
	bear1.move();
	bear2.display();
	bear2.move();
	bear3.display();
	bear3.move();
}

class evilbear1
{
	constructor(x, y, speed)
	{
		this.x = x;
		this.y = y;
		this.speed = speed;
		this.currentImage = bearright;
	}
	display()
	{
		image(this.currentImage, this.x, this.y);
	}
	move()
	{
		this.x += this.speed
		if (this.x > 440)
		{
			this.speed *=-1
			this.currentImage = bearleft;
		}
		if (this.x < 0)
		{
			this.speed *=-1
			this.currentImage = bearright;
		}
	}

}