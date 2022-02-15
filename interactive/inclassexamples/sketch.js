let world;
let sun;
let container;

let fred;

function setup() {

	noCanvas();

	world = new World('VRScene');

	buffer1 = createGraphics(512, 512);

	controlPanel = new Plane({

		x: 10,
		y: 3,
		z: -5,
		height: 2,
		width: 2,
		green: 255, blue: 0, red: 0;
	})
	world.add(controlPanel);

	let floor = new Plane({
		width: 100, height:100,
		rotationX: -90,
		asset: 'brick',

		repeatX: 100, repeatY: 100
	});
	world.add(floor);

	cotaniner = new Container3D({

		x:0, y: 10, z: -5

	});
	world.add(container);

	planet = new Box({
		x: -5, y:0, z: 0,
		width: 3, height: 3, depth: 3,
		red: 255, green: 0, blue: 0
	});
	sun = new Box({
		x: 0, y:3, z: -5,
		width: 3, height: 3, depth: 3,
		red: 255, green: 255, blue: 0
	});
	container.add(planet);
	world.add(sun);


	for (let i =0; i < 100; i ++) {
		robots.push(new Robot(random(-50, 50), 0, random(-50, 50)));
	}
	fred = new Robot(5, 0, -5);
}

function draw()
{
	container.spinY(1);
}

class Robot {

	constructor(x,y,z) {

		this.noiseX = random(0,1000);
		this.noiseY = random(0,1000);

		this.container = new Container3D({
			x: x, y: y, z: z
		});
		world.add(this.container);

		this.body = new Box({
			width:1, height:1, depth: 1,
			x: 0, y: 0.5, z: 0,
			red: random(255),
			green: random(255),
			blue: random(255)
		});
		this.container.add(this.body);
		this.head = new Box({
			width:0.5, height:0.5, depth: 0.5,
			x: 0, y: 1, z: 0,
			red: random(255),
			green: random(255),
			blue: random(255)
		});
		this.container.add(this.head);
	}

	move() {

		let xMove = map(noise(this.noiseX, 0, 1, -0.05, 0.05));
		let zMove = map(noise(this.noiseZ, 0, 1, -0.05, 0.05));

		this.container.nudge(xMove, 0, zMove);

		this.noiseX += 0.01;
		this.noiseZ += 0.01;
	}
}

