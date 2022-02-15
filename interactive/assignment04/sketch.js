// Noah Boyle
// Assignment #4: Robot Factory
let uparrow, downarrow, leftarrow, rightarrow;
let robots =[];
let arrows = [];
let direction = "";
let arrowdirection = "";
let headsize, bodysize;
let headColor;
let bodyColor;
let c = 55;
let index = 0;
let index2 = 75;
let index3 = 75;
let index4 = 75;
let index5 = 75;
let index6 = 75;

function preload() {
	uparrow = loadImage('arrow_up.png');
	downarrow = loadImage('arrow_down.png');
	leftarrow = loadImage('arrow_left.png');
	rightarrow = loadImage('arrow_right.png');
}

function setup() {
	createCanvas(1500, 1000);
	for(let i =0; i < 10; i++)
	{
		index -= 200;
		let  temp = new Robot(100+index, height/2, "right");
		robots.push(temp);
	}
	for(let a =0; a <7; a++)
	{
		index2 -= 200;
		let temp2 = new Arrow(width+index2,100, "down");
		arrows.push(temp2);
	}
	for(let a =0; a <4; a++)
	{
		index3 -= 200;
		let temp3 = new Arrow(width+index3,300, "up");
		arrows.push(temp3);
	}
	for(let a =0; a <2; a++)
	{
		index3 -= 200;
		let temp3 = new Arrow(width+index3,300, "left");
		arrows.push(temp3);
	}
	for(let a =0; a <1; a++)
	{
		index3 -= 200;
		let temp3 = new Arrow(width+index3,300, "right");
		arrows.push(temp3);
	}
	for(let a =0; a <4; a++)
	{
		index4 -= 200;
		let temp3 = new Arrow(width+index4,500, "left");
		arrows.push(temp3);
	}
	for(let a =0; a <3; a++)
	{
		index4 -= 200;
		let temp3 = new Arrow(width+index4,500, "right");
		arrows.push(temp3);
	}
	for(let a =0; a <3; a++)
	{
		index5 -= 200;
		let temp3 = new Arrow(width+index5,700, "up");
		arrows.push(temp3);
	}
	for(let a =0; a <2; a++)
	{
		index5 -= 200;
		let temp3 = new Arrow(width+index5,700, "down");
		arrows.push(temp3);
	}
	for(let a =0; a <1; a++)
	{
		index5 -= 200;
		let temp3 = new Arrow(width+index5,700, "right");
		arrows.push(temp3);
	}
	for(let a =0; a <1; a++)
	{
		index5 -= 200;
		let temp3 = new Arrow(width+index5,700, "left");
		arrows.push(temp3);
	}
	for(let a =0; a <2; a++)
	{
		index6 -= 200;
		let temp3 = new Arrow(width+index6,900, "left");
		arrows.push(temp3);
	}
	for(let a =0; a <2; a++)
	{
		index6 -= 200;
		let temp3 = new Arrow(width+index6,900, "down");
		arrows.push(temp3);
	}
	for(let a =0; a <2; a++)
	{
		index6 -= 200;
		let temp3 = new Arrow(width+index6,900, "up");
		arrows.push(temp3);
	}
	for(let a =0; a <1; a++)
	{
		index6 -= 200;
		let temp3 = new Arrow(width+index6,900, "up");
		arrows.push(temp3);
	}

}

function draw() {
	background(128);
	for (let i = 0; i < robots.length; i++)
		{
			robots[i].move();
			robots[i].display();
			if (robots[i].x > width)
			{
				robots.splice(i, 1);
			}
			if (frameCount > 200)
			{
				let  temp = new Robot(100+index, height/2, "right");
				robots.push(temp);
				frameCount = 0;
				console.log(frameCount);
			}
		}
	for (let a =0; a < arrows.length; a++)
	{
		arrows[a].display();
	}
}

function mousePressed()
{
	for (let a =0; a < arrows.length; a++)
	{
	arrows[a].checkclick();
	}
}

class Robot 
{
	constructor(x, y, direction)
	{
		this.x = x;
		this.y = y;
		this.xSpeed = 1;
		this.ySpeed = 1;
		this.dir = direction;
		this.heads = random(75,100);
		this.headc = color(random(255),random(255),random(255));
		this.bodys = random(100,130);
		this.bodyc = color(random(255),random(255),random(255));
		this.eyet = random(1,10);
	}
	move()
	{
		for (let a =0; a < arrows.length; a++)
		{
			let dd = dist(this.x, this.y, arrows[a].x, arrows[a].y);
			if (dd < 30 && arrows[a].dir == "up")
			{
				this.dir = "up"
				
			}
			if (dd < 30 && arrows[a].dir == "down")
			{
				this.dir = "down"
				
			}
			if (dd < 30 && arrows[a].dir == "left")
			{
				this.dir = "left"
				
			}
			if (dd < 30 && arrows[a].dir == "right")
			{
				this.dir = "right"
			}
			console.log(dd);
		}

		if (this.dir == "up")
		{
			this.y -=this.ySpeed;
			fill(255,255,0,c);
			if(c<255)
			{
				c++;
			}
			if(c>=255){
				c=55;
			}
			noStroke();
			ellipse(this.x,this.y+90,30,30);
		}
		if (this.dir == "down")
		{
			this.y +=this.ySpeed;
			fill(255,255,0,c);
			if(c<255)
			{
				c++;
			}
			if(c>=255){
				c=55;
			}
			noStroke();
			ellipse(this.x,this.y-95,30,30);
		}
		if (this.dir == "left")
		{
			this.x -= this.xSpeed;
			fill(255,255,0,c);
			if(c<255)
			{
				c++;
			}
			if(c>=255){
				c=55;
			}
			noStroke();
			ellipse(this.x+55,this.y+15,40,30);
		}
		if (this.dir == "right")
		{
			this.x += this.xSpeed;
			fill(255,255,0,c);
			if(c<255)
			{
				c++;
			}
			if(c>=255){
				c=55;
			}
			noStroke();
			ellipse(this.x-55,this.y+15,40,30);
		}
	}
	display()
	{
		noStroke()
		rectMode(CENTER);
		fill(this.headc);
		rect(this.x,this.y-30,this.heads,this.heads+30);

		fill(this.bodyc);
		rect(this.x,this.y+30,this.bodys,this.bodys+2);

		if (this.eyet > 6 || this.eyet == 6)
		{
			fill(235);
			rect(this.x, this.y-73,50,10);
		}
		else if (this.eyet || this.eyet == 5)
		{
			fill(235);
			rect(this.x-20,this.y-70,10,20);
			rect(this.x+20,this.y-70,10,20);
		}
	}
}

class Arrow
{
	constructor(x, y, arrowdirection)
	{
		this.x = x;
		this.y = y;
		this.dir = arrowdirection;
		this.currentImage;
	}

	display()
	{
		
		if(this.dir == "up")
		{
			this.currentImage = uparrow;
		}
		if(this.dir == "down")
		{
			this.currentImage = downarrow;
		}
		if(this.dir == "right")
		{
			this.currentImage = rightarrow;
		}
		if(this.dir == "left")
		{
			this.currentImage = leftarrow;
		}
		image(this.currentImage,this.x,this.y);
	}


	checkclick()
	{
		let d = dist(mouseX, mouseY, this.x, this.y);
		console.log(d);

		if(d < 53 && this.currentImage == uparrow)
		{
			this.dir = "right";
		}
		if(d < 53 && this.currentImage == rightarrow)
		{
			this.dir = "down";
		}
		if(d < 53 && this.currentImage == downarrow)
		{
			this.dir = "left";
		}
		if(d < 53 && this.currentImage == leftarrow)
		{
			this.dir = "up";
		}
	}
}