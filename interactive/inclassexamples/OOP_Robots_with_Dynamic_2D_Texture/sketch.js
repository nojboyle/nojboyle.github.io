// variable to hold a reference to our A-Frame world
let world;

// array to hold our robots
let robots = [];

// in-memory image buffer
let buffer1;

// control variable to prevent click spamming
let countDownTimer = 0;

function setup() {
	// no canvas needed
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// teleport the user into the sky
	world.setUserPosition(0, 25, 0);

	// create a floor for the user
	let floor = new Plane({
		rotationX: -90,
		asset: 'brick',
		repeatX: 100,
		repeatY: 100,
		width: 100,
		height: 100
	});
	world.add(floor);

	// create 50 Robot objects to populate the world
	for (let i = 0; i < 50; i++) {
		let temp = new Robot(random(-50,50), 0.5, random(-50,50));
		robots.push( temp );
	}

	// create an off screen graphics buffer
	// this will serve as the texture for our "mini map"
	// that the user can interact with
	buffer1 = createGraphics(256,256);
	buffer1.background(0);

	// convert the off screen graphics buffer into a
	// dynamic texture that we can use with A-Frame P5
	let texture1 = world.createDynamicTextureFromCreateGraphics( buffer1 );

	// instruction text (two copies, so it's visible from both sides)
	let instructions1 = new Text({
		text: 'Click The Mini Map To Add Robots',
		red: 128, green: 128, blue: 128,
		side: 'single',
		x: 0, y: 26.5, z: -2,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(instructions1);

	let instructions2 = new Text({
		text: 'Click The Mini Map To Add Robots',
		red: 128, green: 128, blue: 128,
		side: 'single',
		x: 0, y: 26.5, z: -2,
		rotationY: 180,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(instructions2);

	// control panel that the user can click on to add
	// new robots to the world, as well as see the positions
	// of all existing robots
	controlPanel = new Plane({
		x: 0, y: 25, z: -2,
		width: 2, height: 2,
		side: 'double',
		asset: texture1,
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256,
		overFunction: function(entity, intersectionInfo) {
			// when the user hovers over this entity
			// this function will run. it's given two values -
			// the entity that triggered the event and
			// an object that contains information about the
			// interaction (intersectionInfo)

			// if the mouse is currently being pressed
			if (mouseIsPressed && countDownTimer == 0) {

				// prevent click spamming
				countDownTimer = 10;

				// convert 2d click coordinates to 3d coordinates
				let x = map(intersectionInfo.point2d.x, 0, 256, -50, 50);
				let z = map(intersectionInfo.point2d.y, 0, 256, -50, 50);

				// create a new robot here
				robots.push( new Robot(x,0.5,z) );
			}

			// prevent click spamming
			countDownTimer--;
			countDownTimer = constrain(countDownTimer, 0, 30);
		}
	});
	world.add(controlPanel);

}

function draw() {

	// erase the control panel (mini map) background
	buffer1.background(0);

	// move all robots
	for (let i = 0; i < robots.length; i++) {
		robots[i].move();
		robots[i].reportPosition();
	}

}


class Robot {

	constructor(x,y,z) {
		this.startX = x;
		this.startY = y;
		this.startZ = z;

		// all robots need a 3D container to hold their
		// 'parts' (head and body)
		this.container = new Container3D({
			x: this.startX,
			y: this.startY,
			z: this.startZ
		});
		world.add(this.container);

		// the head of our robot -- note the position is
		// not in absolute (world) coordinates but in
		// relative coordinates based on the origin being
		// at the cetnter of the 3D container we created
		this.headColor = color(random(255), random(255), random(255));
		this.head = new Box({
			x: 0,
			y: .75,
			z: 0,
			red: red(this.headColor),
			green: green(this.headColor),
			blue: blue(this.headColor),
			width: 0.5, height: 0.5, depth: 0.5
		});

		// same thing with the body
		this.body = new Box({
			x: 0,
			y: 0,
			z: 0,
			red: random(255),
			green: random(255),
			blue: random(255),
			width: 1, height: 1, depth: 1
		});

		// add both the head and body to our container
		// (not to the world)
		this.container.add(this.head);
		this.container.add(this.body);

		// where does this robot want to go?
		this.desiredX = random(-50, 50);
		this.desiredZ = random(-50, 50);
	}

	reportPosition() {
		// get our current position
		let currentPosition = this.container.getWorldPosition();

		// map our current position to 2d space
		let x = map(currentPosition.x, -50, 50, 0, 256);
		let y = map(currentPosition.z, -50, 50, 0, 256);

		// draw out an indicator on the buffer to show where we are
		buffer1.fill(this.headColor);
		buffer1.rect(x,y,5,5);
	}

	move() {

		// get our current position
		let currentPosition = this.container.getWorldPosition();

		// see how we need to adjust our position to get to our desired position
		let xMove = 0;
		let zMove = 0;
		if (abs(currentPosition.x - this.desiredX) > 0.3) {
			if (currentPosition.x < this.desiredX) {
				xMove = 0.01;
			}
			else {
				xMove = -0.01;
			}
		}

		if (abs(currentPosition.z - this.desiredZ) > 0.3) {
			if (currentPosition.z < this.desiredZ) {
				zMove = 0.01;
			}
			else {
				zMove = -0.01;
			}
		}

		// move our container
		this.container.nudge(xMove, 0, zMove);

		// did we get to our destination?  if so,
		// pick a new one
		if (dist(this.desiredX, this.desiredZ, currentPosition.x, currentPosition.z) < 0.5) {
			this.desiredX = random(-50, 50);
			this.desiredZ = random(-50, 50);
		}

	}
}
