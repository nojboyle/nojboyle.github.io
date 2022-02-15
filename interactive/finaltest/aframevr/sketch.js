let world;

function setup() {

	world = new World('VRScene');

	let canvas1 = createCanvas(512,512).id();

	let sky = new Sky({
		asset: 'sky'
	});
	world.add(sky);

	treeContainer = new Container3D({
			x:0, y:0, z:0,
		});
		world.add(treeContainer);

	let plane1 = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'snow',
						repeatX: 10,
						repeatY: 10,
						rotationX:-90, metalness:0.25
					   });
	world.add(plane1);

	for (let i = 0; i < 5; i++) {
		let x = random(-75, 75);
		let y = 0;
		let z = random(-50, 50);
		presents = new GLTF({
			asset: 'present',
			x:x,
			y:y,
			z:z,
			scaleX:0.05,
			scaleY:0.05,
			scaleZ:0.05,
			clickFunction: function(thePresent) {
								world.teleportToObject(thePresent);
							}
		});
	world.add(presents)

	for (let i = 0; i < 1; i++) {
		let x = random(-75, 75);
		let y = 0;
		let z = random(-50, 50);
		santa = new GLTF({
			asset: 'santa',
			x:x,
			y:y,
			z:z,
			scaleX:1,
			scaleY:1,
			scaleZ:1,
			clickFunction: function(theSanta) {
								world.teleportToObject(theSanta);
							}
		});
	world.add(santa)
	}

	let box1 = new Box({
		x:0, y:25, z:-5,
		width:30, height:10, depth:3,
		asset: canvas1,
		dynamicTexture: true,
		dynamicTextureWidth: 512,
		dynamicTextureHeight: 512
	});

	world.add(box1);

	text = new Text({
      text: 'Presents Remaining: 5',
      red: 255, green: 0, blue: 0,
      side: 'double',
      x: 0, y: 50, z: 0,
      scaleX: 5, scaleY: 5, scaleZ: 5
   });
world.add(text);

}
}


function draw() {
	

		fill(255);
		background(255, 0 ,0);
		textSize(1000);
		text("Presents Remaining: 5", width/2, height/2);

		box1.spinY(1);

	for (let i =0; i < 20; i ++) 
		{
			let tree1 = new Tree(random(-75,75),5,random(-50,50));
			world.treeContainer.add(tree1);
		}

}

class Tree{

	constructor(x,y,z){
		this.treeContainer = new Container3D({
			x:0, y:0, z:0,
		});
		world.add(this.treeContainer);
		this.treeTrunk = new Cylinder({
			x:this.x,
			y:this.y,
			z:this.z,
			red: 165,
			green: 42,
			blue: 42,
			scaleY: int(random(1,3)),
		})
		treeContainer.add(this.treeTrunk);
		this.treeCrown = new Cone({
			x:this.x,
			y:this.y+10,
			z:this.z,
			asset: canvas1,
			dynamicTexture: true,
			dynamicTextureWidth: 512,
			dynamicTextureHeight: 512
		})
		treeContainer.add(this.treeTrunk);
	}
}