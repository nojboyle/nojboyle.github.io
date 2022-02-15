let walker1, walker2, walker3;

function setup() {
	createCanvas(500, 500);
	background(128);

	walker1 = new RandomWalker(250, 250);
	walker2 = new RandomWalker(250, 250);
	walker3 = new RandomWalker(250, 250);
}

function draw(){

}


class RandomWalker {
	constructor(x, y) {
	this.x = x;
	this.y = y;

	this.color = color(random(255), random(255), random(255));

	this.xSpeed = random(-2, 2);
	this.ySpeed = random(-2, 20);

	// keep track of how long we have been moving in one direction
	this.timeMoving = 0;

	this.desiredTimeMoving = int(random(100, 200));
	}

	moveAndDisplay() {
	this.x += this.xSpeed;
	this.y += this.ySpeed;

	// every frame increase the amount of time moving

	this.timeMoving += 1;

	if (this.timeMoving >= this.desiredTimeMoving) {
		this.currentImage = dollgirl2;

		this.timeMoving = 0;-

		this.desiredTimeMoving = int(random(100,200));
	}

	this.xSpeed = random(-2, 2);
	this.ySpeed = random(-2, 2);

	if(this.x > width) {
	this.x = 0;
	}
	if (this.x < 0){
	this.x = width;
	}
	if (this.y > height){
	this.y = 0;
	}
	if (this.y < 0){
	this.y = height;
	}

	fill(this.color);
	ellipse(this.x, this.y, 30, 30);
	fill(0);
	text(this.timeMoving, this.x-20, this.y-20);
	}
}