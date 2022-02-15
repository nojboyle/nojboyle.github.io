// Noah Boyle
// Assignment #7: Virtual Reality - Crystal World
let world;
let teleportsound;

function preload() {
	teleportsound = loadSound('teleportsound.mp3');
	crystalresonant = loadSound('crystalresonant.mp3');
}

function setup() {
	let canvasName = createCanvas(512,512).id();

	world = new World('VRScene');

	let sky = new Sky({
		asset: 'crystalsky'
	});
	world.add(sky);

	world.setBackground(0,0,0);

	let octahedron = new Octahedron({
		x: 5, y: 5, z: 0,
		radius: 1,
		side: 'double',
		asset: canvasName,
		dynamicTexture: true,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512
	});
	world.add(octahedron);

	torusKnot = new TorusKnot({
      x:10, 
      y:10, 
      z:0,
      scaleX:3, scaleY:3, scaleZ:3, 
      red:random(0,255), 
      green:random(0,255), 
      blue:random(0,255),
      clickFunction: function(theTorusKnot) {
								theTorusKnot.setColor(random(0,255),random(0,255),random(0,255));
							}
   	});
	world.add(torusKnot);

	
	for (let i = 0; i < 10; i++) {
		let x = random(-50, 50);
		let y = random(50, 100);
		let z = random(-50, 50);
		let b1 = new Box({
			x:x, y:y, z:z,
			width:3, height:3, depth:3,
			scaleX:2, scaleY:2, scaleZ:2,
			asset: canvasName,
			dynamicTexture: true,
			dynamicTextureWidth: 512,
			dynamicTextureHeight: 512
		});
		world.add(b1);
	}


	for (let i = 0; i < 20; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		let crystal2 = new GLTF({
			x:x,
			y:y,
			z:z,
			asset: 'crystal2',
			scaleX:0.03,
			scaleY:0.03,
			scaleZ:0.03,
		});
	world.add(crystal2);
	}

	for (let i = 0; i < 150; i++) {
		let x = random(-50, 50);
		let y = random(10, 100);
		let z = random(-50, 50);
		let s = new Box({
							x:x,
							y:y,
							z:z,
							scaleX:2,
							scaleY:2,
							scaleZ:2,
							asset: 'crystal',
							clickFunction: function(theBox) {
								world.slideToObject( theBox, 100 );
								teleportsound.play();
							}
		});
		world.add(s);
	}

	for (let i = 0; i < 100; i++) {
		let x = random(-50, 50);
		let y = random(2, 9);
		let z = random(-50, 50);
		let c = new Sphere({
							x:x,
							y:y,
							z:z,
							asset: 'spherecrystal',
							clickFunction: function(theSphere) {
								c.setScale(2,2,2); 
								crystalresonant.play();
							}
		});
		world.add(c);
	}

	for (let i = 0; i < 50; i++) {
		let x = random(-30, 30);
		let y = 1;
		let z = random(-50, 50);
		let r = new Cone({
							x:x,
							y:y,
							z:z,
							asset: 'conecrystal',
							clickFunction: function(theCone) {
								r.spinX(random(360)); 
								crystalresonant.play();
							}
		});
		world.add(r);
	}

	for (let i = 0; i < 25; i++) {
		let x = random(-30, 30);
		let y = random(0,20);
		let z = random(-50, 50);
		let d = new Torus({
							x:x,
							y:y,
							z:z,
							asset: 'toruscrystal',
							clickFunction: function(theTorus) {
								world.teleportToObject(theTorus);
								teleportsound.play();
							}
		});
		world.add(d);
	}

	let plane = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'crystalground',
						repeatX: 100,
						repeatY: 100,
						rotationX:-90, metalness:0.25
					   });

	world.add(plane);

	/*crystal1 = new GLTF({
		asset: 'crystal1',
		x:45,
		y:0,
		z:0,
		scaleX:1,
		scaleY:1,
		scaleZ:1,
		clickFunction: function(theGLTF) {
								theGLTF.setScale(2,2,2);
							}

	})
	world.add(crystal1);*/

	container = new Container3D({x:-2, y:3, z:0});

	world.add(container);

	let b2= new Box({
		x:-5, y:0, z:0,
		asset: 'containercrystal1',
		red: random(255), green:random(255), blue:random(255)
	})
	container.addChild(b2);

	let b3 = new Box({
		x:5, y:0, z:0,
		asset: 'containercrystal2',
		red: random(255), green:random(255), blue:random(255)
	})

	container.addChild(b3);

	let b4 = new Box({
		x:2, y:4, z:0,
		asset: 'containercrystal2',
		red: random(255), green:random(255), blue:random(255)
	})

	container.addChild(b4);


	let b5= new Box({
		x:-10, y:2, z:0,
		asset: 'containercrystal1',
		red: random(255), green:random(255), blue:random(255)
	})
	container.addChild(b5);
}
function draw() {
	container.spinY(1);
	fill(random(0,255), random(0,255), random(0,255));
	circle(random(width), random(height), random(5,30));
}
