// Noah Boyle
// Assignment 3: Open Ended Game
let dollgirl1, dollgirl2, dollgirl3;
let survivoridle, survivorup, survivordown, survivorleft, survivorright, survivordead, survivorwin;
let dollassistant1, dollassistant2, dollassistantgreen1, dollassistantgreen2;
let bearright, bearleft;
let background;
let timer;
let interval = 200000;
let countdown;
let state = 0;
let score;
let player;
let alive;
let dolltime;
let bearvisind1;
let bearvisind2;
let bear1, bear2, bear3;
let gamestart;
let difficulty;
let startgame;
let respawn;
let easy;
let normal;
let hard;
let extrahard;
let canvas;
let deathsound;


function preload(){
	dollgirl1 = loadImage('dollgirl1resized.png');
	dollgirl2 = loadImage('dollgirl2resized.png');
	dollgirl3 = loadImage('dollgirl3resized.png');
	survivoridle = loadImage('idle.png');
	survivorup = loadImage('upmove.gif');
	survivordown = loadImage('downmove.gif');
	survivorleft = loadImage('leftmove.gif');
	survivorright = loadImage('rightmove.gif');
	survivordead = loadImage('dead1.png');
	survivorwin = loadImage('win1.gif');
	dollassistant1 = loadImage('dollasssitant.gif');
	dollassistant2 = loadImage('dollassistant2.gif');
	dollassistantgreen1 = loadImage('dollassistantgreen1.gif');
	dollassistantgreen2 = loadImage('dollassistantgreen2.gif');
	bearright = loadImage('bearright.gif');
	bearleft = loadImage('bearleft.gif');
	background = loadImage('backgroundart.png');
	deathsound = loadSound('deathsound.mp3');

}

function setup(){
	canvas = createCanvas(500, 1600);
	canvas.parent('sketch-holder');
	fill(255, 0, 0);
	noStroke();
	rect(0, 300, width, 10);
	player = new Survivor(width/2 -30, 1500);
	dolltime = new QueenDoll(0, 40);
	bearvisind1 = new bearIndicator1(140, 200);
	bearvisind2 = new bearIndicator2(300, 200);
	bearvisind12 = new bearIndicator1(0, 1525);
	bearvisind22 = new bearIndicator2(430, 1525);
	bearvisind13 = new bearIndicator1(0, 1225);
	bearvisind23 = new bearIndicator2(430, 1225);
	bearvisind14 = new bearIndicator1(0, 850);
	bearvisind24 = new bearIndicator2(430, 850);
	alive = 0;
	gamestart = 0;
	bear1 = new evilbear1(50, 1300, 2);
	bear2 = new evilbear1(100,1000, 5);
	bear3 = new evilbear1(50, 750, 7);
	bear4 = new evilbear1(50, 500, 10);
	difficulty = 1;
	timer = millis() + interval;
	startgame = createButton("START GAME");
	startgame.style('border', '2px solid black');
	startgame.style('background-color', 'white');
	startgame.style('color', 'black');
	startgame.style('padding', '14px 18px');
	startgame.position(10, 100, 'sticky');
	startgame.mousePressed(starting);
	easy = createButton("EASY");
	easy.style('border', '2px solid black');
	easy.style('background-color', 'white');
	easy.style('color', 'black');
	easy.style('padding', '14px 18px');
	easy.position(130,100, 'sticky');
	easy.mousePressed(ez);
	normal = createButton("NORMAL");
	normal.style('border', '2px solid black');
	normal.style('background-color', 'white');
	normal.style('color', 'black');
	normal.style('padding', '14px 18px');
	normal.position(200,100, 'sticky');
	normal.mousePressed(norm);
	hard = createButton("HARD");
	hard.style('border', '2px solid black');
	hard.style('background-color', 'white');
	hard.style('color', 'black');
	hard.style('padding', '14px 18px');
	hard.position(275,100, 'sticky');
	hard.mousePressed(har);
	extrahard = createButton("EXTRA HARD");
	extrahard.style('border', '2px solid black');
	extrahard.style('background-color', 'white');
	extrahard.style('color', 'black');
	extrahard.style('padding', '14px 18px');
	extrahard.position(330, 100, 'sticky');
	extrahard.mousePressed(xhar);
}

function draw(){
	rect(0, 350, width, 10);
	image(background, 0, 0);
	player.display();
	player.move();
	player.keyReleased();
	player.win();
	dolltime.display();
	dolltime.changecount();
	dolltime.increasecount();
	dolltime.killplayer();
	bearvisind1.display();
	bearvisind2.display();
	bearvisind1.greenlight();
	bearvisind2.greenlight();
	bearvisind1.redlight();
	bearvisind2.redlight();
	bear1.display();
	bear1.move();
	bear2.display();
	bear2.move();
	bear3.display();
	bear3.move();
	bear4.display();
	bear4.move();
	countdown=ceil((timer-millis())/1000);
	score = countdown;
	if (state == 0 && gamestart >=1)
		{
			textSize(22);
			text(countdown, 460, 20);
		}
	else if (state == 1 && gamestart >=1)
	{
		textSize(22);
		text(score, 100, 1400);
	}

	if (timer < millis() && gamestart >=1 && player.y<235)
	{
		timer = millis() + interval;
		state = 1;
	}
}

function starting()
		{
			gamestart += 1;
			alive +=1;
		}

function ez()
	{
		difficulty = 0;
		if (difficulty ==0)
		{
			bear1.speed = 2;
      		bear2.speed = 3;
      		bear3.speed = 5;
      		bear4.speed = 5;
		}
		bearvisind12.display();
		bearvisind22.display();
		bearvisind12.greenlight();
		bearvisind22.greenlight();
		bearvisind12.redlight();
		bearvisind22.redlight();
		bearvisind13.display();
		bearvisind23.display();
		bearvisind13.greenlight();
		bearvisind23.greenlight();
		bearvisind13.redlight();
		bearvisind23.redlight();
		bearvisind14.display();
		bearvisind24.display();
		bearvisind14.greenlight();
		bearvisind24.greenlight();
		bearvisind14.redlight();
		bearvisind24.redlight();
	}

function norm()
	{
		difficulty = 1;
		if (difficulty ==1)
		{
			bear1.speed = 2;
      		bear2.speed = 5;
      		bear3.speed = 7;
      		bear4.speed = 10;
		}
	}
function har()
	{
		difficulty = 2;
		if (difficulty == 2)
		{
			bear1.speed = 5;
      		bear2.speed = 7;
      		bear3.speed = 10;
     		bear4.speed = 12;
		}
	}
function xhar()
	{
		difficulty = 3;
		if (difficulty == 3)
		{
			bear1.speed = 7;
      		bear2.speed = 10;
      		bear3.speed = 12;
      		bear4.speed = 15;
		}
	}

class QueenDoll{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
		this.currentImage = dollgirl1;
		this.currentcount = 0;
		this.desiredcount = int(random(300,700));
	}
	display()
	{
		image(this.currentImage, this.x, this.y);
	}
	changecount()
	{
		if (this.currentcount <= this.desiredcount && this.currentcount >= 0 && gamestart >=1)
		{
			this.currentImage = dollgirl3;
		}

		if (this.currentcount >= this.desiredcount && gamestart >=1)
		{
			this.currentImage = dollgirl1;
			this.currentcount = int(random(-200,-500));
		}

	}
	increasecount()
	{
		if (gamestart >=1)
		{
			this.currentcount += 1;
		}

	}
	killplayer()
	{
		if (this.currentImage == dollgirl1 && gamestart==1 && keyIsDown(UP_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		if (this.currentImage == dollgirl1 && gamestart==1 && keyIsDown(DOWN_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		if (this.currentImage == dollgirl1 && gamestart==1 && keyIsDown(RIGHT_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		if (this.currentImage == dollgirl1 && gamestart==1 && keyIsDown(LEFT_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		/*if (this.currentcount >= this.desiredcount && keyTyped(UP_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		if (this.currentImage == dollgirl1 && keyTyoed(DOWN_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		if (this.currentImage == dollgirl1 && keyTyped(LEFT_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}
		if (this.currentImage == dollgirl1 && keyTyped(RIGHT_ARROW))
		{
			this.currentImage = dollgirl2;
			this.currentcount = -10000;
			player.dead();
			alive -=1;
		}*/
	}

}

class Survivor{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.currentImage = survivoridle;
		this.startingX = x;
		this.startingY = y;
		this.currentImage = survivoridle;
	}

	gameover()
	{
		this.x = this.startingX;
		this.y = this.startingY;
	}
	display()
	{
		image(this.currentImage, this.x, this.y);
	}
	move(){
	if (keyIsDown(UP_ARROW) && alive ==1 && gamestart >= 1 && difficulty==1 && this.y > 0) {
      this.y -= 4.5;
      this.currentImage = survivorup;
    }
    if (keyIsDown(DOWN_ARROW) && alive ==1 && gamestart >= 1 && difficulty==1 && this.y < 1500) {
      this.y += 4.5;
      this.currentImage = survivordown;
    }
    if (keyIsDown(RIGHT_ARROW) && alive==1 && gamestart >= 1 && difficulty==1 && this.x < 425) {
      this.x += 4.5;
      this.currentImage = survivorright;
    }
    if (keyIsDown(LEFT_ARROW) && alive==1 && gamestart >= 1 && difficulty==1 && this.x > 0) {
      this.x -= 4.5;
      this.currentImage = survivorleft;
    }

	if (keyIsDown(UP_ARROW) && alive ==1 && gamestart >= 1 && difficulty==2 && this.y > 0) {
      this.y -= 3;
      this.currentImage = survivorup;
    }
    if (keyIsDown(DOWN_ARROW) && alive ==1 && gamestart >= 1 && difficulty==2 && this.y < 1500) {
      this.y += 3;
      this.currentImage = survivordown;
    }
    if (keyIsDown(RIGHT_ARROW) && alive==1 && gamestart >= 1 && difficulty==2 && this.x < 425) {
      this.x += 3;
      this.currentImage = survivorright;
    }
    if (keyIsDown(LEFT_ARROW) && alive==1 && gamestart >= 1 && difficulty==2 && this.x > 0) {
      this.x -= 3;
      this.currentImage = survivorleft;
    }

	if (keyIsDown(UP_ARROW) && alive ==1 && gamestart >= 1 && difficulty==3 && this.y > 0) {
      this.y -= 2;
      this.currentImage = survivorup;
    }
    if (keyIsDown(DOWN_ARROW) && alive ==1 && gamestart >= 1 && difficulty==3 && this.y < 1500) {
      this.y += 2;
      this.currentImage = survivordown;
    }
    if (keyIsDown(RIGHT_ARROW) && alive==1 && gamestart >= 1 && difficulty==3 && this.x < 425) {
      this.x += 2;
      this.currentImage = survivorright;
    }
    if (keyIsDown(LEFT_ARROW) && alive==1 && gamestart >= 1 && difficulty==3 && this.x > 0) {
      this.x -= 2;
      this.currentImage = survivorleft;
    }

    if (keyIsDown(UP_ARROW) && alive ==1 && gamestart >= 1 && difficulty==0 && this.y > 0) {
      this.y -= 6;
      this.currentImage = survivorup;
    }
    if (keyIsDown(DOWN_ARROW) && alive ==1 && gamestart >= 1 && difficulty==0 && this.y < 1500) {
      this.y += 6;
      this.currentImage = survivordown;
    }
    if (keyIsDown(RIGHT_ARROW) && alive==1 && gamestart >= 1 && difficulty==0 && this.x < 425) {
      this.x += 6;
      this.currentImage = survivorright;
    }
    if (keyIsDown(LEFT_ARROW) && alive==1 && gamestart >= 1 && difficulty==0 && this.x > 0) {
      this.x -= 6;
      this.currentImage = survivorleft;
    }

	}

	keyReleased()
	{
		if (keyIsDown(UP_ARROW)||keyIsDown(DOWN_ARROW)||keyIsDown(RIGHT_ARROW)||keyIsDown(LEFT_ARROW)|| player.currentImage == survivordead)
		{

		}

		else
		{
			this.currentImage = survivoridle;
		}
	}
	win()
	{
		if (this.y <= 235)
		{
			this.currentImage = survivorwin;
			score = countdown;
			alive -= 1;
		}
	}
	dead()
	{
		this.currentImage = survivordead;
		alive -= 1;
		deathsound.play();
	}

	reset()
	{
		this.x = this.startingX;
    	this.y = this.startingY;
	}
	}


class bearIndicator1
	{
		constructor(x, y)
		{
			this.x = x;
			this.y = y;
			this.currentImage = dollassistantgreen1;
		}
		display()
		{
			image(this.currentImage, this.x, this.y);
		}
		greenlight()
		{
			if (dolltime.currentImage == dollgirl3)
			{
				this.currentImage = dollassistantgreen1;
			}
		}
		redlight()
		{
			if (dolltime.currentImage == dollgirl1 || dolltime.currentImage == dollgirl2)
			{
				this.currentImage = dollassistant1;
			}
		}
	}
class bearIndicator2
	{
		constructor(x, y)
		{
			this.x = x;
			this.y = y;
			this.currentImage = dollassistantgreen2;
		}
		display()
		{
			image(this.currentImage, this.x, this.y);
		}
		greenlight()
		{
			if (dolltime.currentImage == dollgirl3)
			{
				this.currentImage = dollassistantgreen2;
			}
		}
		redlight()
		{
			if (dolltime.currentImage == dollgirl1 || dolltime.currentImage == dollgirl2)
			{
				this.currentImage = dollassistant2;
			}
		}
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
			if (gamestart >= 1)
			{
				this.x += this.speed
			}
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
			let d = dist(this.x+this.currentImage.width/2, this.y+this.currentImage.height/2, player.x+player.currentImage.width/2, player.y+player.currentImage.height/2)

    		if (d <50 && player.currentImage != survivordead) {
      						player.reset();
    					}
		}
	}
