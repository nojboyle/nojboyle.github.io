// Noah Boyle
// Final project: Season Shifter 
let world;
let autumncontainer;
let wintercontainer;
let springcontainer;
let summercontainer;
let xoff = 0.0;
let points = 0;
let mode = 0;
let coinsound;
let leafsound;
let snowsound;
let grassound;
let sandsound;
let index =0;
let index2 =0;
let index3 =0;
let index4 =0;
let secondindex = 1;
let thirdindex = 1;
let frameCount2;
let frameCount3;

function preload() {
	coinsound = loadSound('images/coincollect.mp3');
	leafsound = loadSound('images/leafcrunch.mp3');
	snowsound = loadSound('images/snowcrunch.mp3');
	grassound = loadSound('images/grasswalk.mp3');
	sandsound = loadSound('images/sandwalk2.mp3');
}

function setup() {

	frameRate(30);

	world = new World('VRScene');

	autumncontainer = new Container3D({x:0, y:0, z:0});
	wintercontainer = new Container3D({x:0, y:0, z:0});
	springcontainer = new Container3D({x:0, y:0, z:0});
	summercontainer = new Container3D({x:0, y:0, z:0});
	coincontainer = new Container3D({x:0, y:0, z:0});
	coincontainer2 = new Container3D({x:0, y:0, z:0});
	coincontainer3 = new Container3D({x:0, y:0, z:0});

	autumncontainer.hide();
	wintercontainer.hide();
	springcontainer.hide();
	summercontainer.hide();

	world.add(autumncontainer);
	world.add(wintercontainer);
	world.add(springcontainer);
	world.add(summercontainer);

	let sky1 = new Sky({
		asset: 'sky1',
		radius: 200,
	});
	autumncontainer.add(sky1);

	let sky2 = new Sky({
		asset: 'sky5',
		radius: 200,
	});
	wintercontainer.add(sky2);

	let sky3 = new Sky({
		asset: 'sky2',
		radius: 200,
	});
	springcontainer.add(sky3);

	let sky4 = new Sky({
		asset: 'sky4',
		radius: 200,
	});
	summercontainer.add(sky4);

	world.setBackground(0,0,0);

	let plane1 = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'autumnfoliage',
						repeatX: 10,
						repeatY: 10,
						rotationX:-90, metalness:0.25
					   });

	autumncontainer.add(plane1);

	let plane2 = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'wintersnow',
						repeatX: 10,
						repeatY: 10,
						rotationX:-90, metalness:0.25
					   });

	wintercontainer.add(plane2);

	let plane3 = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'springmeadow',
						repeatX: 10,
						repeatY: 10,
						rotationX:-90, metalness:0.25
					   });

	springcontainer.add(plane3);

	let plane4 = new Plane({
						x:0, y:0, z:0,
						width:100, height:100,
						asset: 'summersands',
						repeatX: 10,
						repeatY: 10,
						rotationX:-90, metalness:0.25
					   });

	summercontainer.add(plane4);

	for (let i = 0; i < 60; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		tree3 = new GLTF({
			asset: 'tree3',
			x:x,
			y:y,
			z:z,
			scaleX:0.01,
			scaleY:0.01,
			scaleZ:0.01,
			clickFunction: function(theTree) {
								world.teleportToObject(theTree);
							}
		});
	autumncontainer.add(tree3);
	}

	for (let i = 0; i < 500; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		leaves = new GLTF({
			asset: 'leaf1',
			x:x,
			y:y,
			z:z,
			scaleX:0.09,
			scaleY:0.09,
			scaleZ:0.09,
		});
	autumncontainer.add(leaves);
	}

	for (let n = 0; n < 20; n++) {
		let x = random(-50,50);
		let y = random(0);
		let z = random(-50, 50);
		snow2 = new GLTF({
			asset: 'snowy',
			x:x,
			y:y,
			z:z,
			rotationY:random(-50,50),
			scaleX:50,
			scaleY:50,
			scaleZ:50,
		});
		wintercontainer.add(snow2);
	}

	for (let i = 0; i < 60; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		tree4 = new GLTF({
			asset: 'tree4',
			x:x,
			y:y,
			z:z,
			scaleX:5,
			scaleY:10,
			scaleZ:5,
			clickFunction: function(theTree) {
								world.teleportToObject(theTree);
							}
		});
	wintercontainer.add(tree4);
	}

	for (let i = 0; i < 60; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		tree6 = new GLTF({
			asset: 'tree6',
			x:x,
			y:y,
			z:z,
			scaleX:1,
			scaleY:1,
			scaleZ:1,
			clickFunction: function(theTree) {
								world.teleportToObject(theTree);
							}
		});
	summercontainer.add(tree6);
	}

	for (let i = 0; i < 50; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		flowers = new GLTF({
			asset: 'flower2',
			x:x,
			y:y,
			z:z,
			scaleX:3.5,
			scaleY:3.5,
			scaleZ:3.5,
		});
	springcontainer.add(flowers);
	}
	for (let i = 0; i < 50; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		flowers2 = new GLTF({
			asset: 'flower4',
			x:x,
			y:y,
			z:z,
			scaleX:1,
			scaleY:1,
			scaleZ:1,
		});
	springcontainer.add(flowers2);
	}
	for (let i = 0; i < 50; i++) {
		let x = random(-50, 50);
		let y = 0;
		let z = random(-50, 50);
		tree7 = new GLTF({
			asset: 'tree7',
			x:x,
			y:y,
			z:z,
			scaleX:0.11,
			scaleY:0.11,
			scaleZ:0.11,
		});
	springcontainer.add(tree7);
	}

	for (let t = 0; t < 20; t++) {
		let x = random(-50, 50);
		let y = random(0, 9);
		let z = random(-50, 50);
		let coin = new Sphere({
							x:x,
							y:y,
							z:z,
							scaleX:0.2,
							scaleY:0.2,
							scaleZ:0.2,
							asset: 'coin',
							clickFunction: function(theSphere) {
								 theSphere.hide();
								 coinsound.play();
								 points +=1;
								 document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";

							},
							enterFunction: function(theSphere) {
									theSphere.spinY(1)
								
							}
		});
		autumncontainer.add(coin);
	}

	for (let t = 0; t < 25; t++) {
		let x = random(-50, 50);
		let y = random(6, 13);
		let z = random(-50, 50);
		let coin = new Sphere({
							x:x,
							y:y,
							z:z,
							scaleX:0.2,
							scaleY:0.2,
							scaleZ:0.2,
							asset: 'coin',
							clickFunction: function(theSphere) {
								 coinsound.play();
								 theSphere.hide();
								 points +=1;
								 document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";

							},
							enterFunction: function(theSphere) {
									
								for(let i=0; i < 100; i++)
								{
									theSphere.spinY(1)
								}
							}
		});
		coincontainer.add(coin);
	}
	wintercontainer.add(coincontainer);

	for (let t = 0; t < 50; t++) {
		let x = random(-50, 50);
		let y = random(1, 9);
		let z = random(-25,25);
		let coin = new Sphere({
							x:x,
							y:y,
							z:z,
							scaleX:0.2,
							scaleY:0.2,
							scaleZ:0.2,
							asset: 'coin',
							clickFunction: function(theSphere) {
								 coinsound.play();
								 theSphere.hide();
								 points +=1;
								 document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";

							},
							enterFunction: function(theSphere) {
									
								for(let i=0; i < 100; i++)
								{
									theSphere.spinY(1)
								}
							}
		});
		coincontainer2.add(coin);
	}
	springcontainer.add(coincontainer2);
	for (let t = 0; t < 40; t++) {
		let x = random(-50, 50);
		let y = random(0,20);
		let z = random(-50, 50);
		let coin = new Sphere({
							x:x,
							y:y,
							z:z,
							scaleX:0.2,
							scaleY:0.2,
							scaleZ:0.2,
							asset: 'coin',
							clickFunction: function(theSphere) {
								 coinsound.play();
								 theSphere.hide();
								 points +=1;
								 document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";

							},
							enterFunction: function(theSphere) {
									
								for(let i=0; i < 100; i++)
								{
									theSphere.spinY(1)
								}
							}
		});
		coincontainer3.add(coin);
	}

	summercontainer.add(coincontainer3);

	autumncontainer.show();
	mode =1;
	frameCount2 = frameCount;


}
function draw() {

	frameCount2 = frameCount;
	frameCount3 = frameCount;
	frameCount4 = frameCount;

	if (frameCount2 == 40 && mode ==2 && secondindex == 1)
	{
		coincontainer.hide();
		frameCount2 = 0;
		secondindex = 0;
	}
	if (frameCount2 == 20 && mode ==2 && secondindex == 0)
	{
		coincontainer.show();
		frameCount2 = 0;
		secondindex += 1;
	}

	coincontainer2.spinY(0.65);

	if (frameCount3 == 10 && mode ==4 && thirdindex ==1)
	{
		coincontainer3.hide();
		frameCount3 = 0;
		thirdindex = 0;
	}
	if (frameCount3 == 5 && mode ==4 && thirdindex ==1)
	{
		coincontainer.show();
		frameCount3 = 0;
		thirdindex += 1;
	}
	coincontainer3.spinY(-1.1);

	if(frameCount == 40)
	{
		document.getElementById("loadscreen1").innerHTML = "";
		frameCount = 0;
	}

	if(frameCount == 20 && mode ==1 && index < 1)
	{
		document.getElementById("loadscreen1").innerHTML = "<img src='images/autumnlogo.png' width ='300' height='300'>";
		frameCount = 0;
		index+=1
	}
	if (frameCount4 == 30 && mode == 1 && index == 1)
	{
		document.getElementById("loadscreen1").innerHTML = "";
	}

	if(frameCount == 0 && mode ==2 && index2 < 1)
	{
		document.getElementById("loadscreen1").innerHTML = "<img src='images/winterlogo.png' width ='300' height='300'>";
		index2+=1
	}
	if (frameCount == 30 && mode == 2 && index2 == 1)
	{
		document.getElementById("loadscreen1").innerHTML = "";
	}
	if(frameCount == 0 && mode ==3 && index3 < 1)
	{
		document.getElementById("loadscreen1").innerHTML = "<img src='images/springlogo.png' width ='300' height='300'>";
		index3+=1
	}
	if (frameCount == 30 && mode == 3 && index3 == 1)
	{
		document.getElementById("loadscreen1").innerHTML = "";
	}
	if(frameCount == 0 && mode ==4 && index4 < 1)
	{
		document.getElementById("loadscreen1").innerHTML = "<img src='images/summerlogo.png' width ='300' height='300'>";
		index4+=1
	}
	if (frameCount == 30 && mode == 4 && index4 == 1)
	{
		document.getElementById("loadscreen1").innerHTML = "";
	}


	if(points == 10 && mode == 1)
	{
		autumncontainer.hide();
		mode =2;
		wintercontainer.show();
		points =0;
		frameCount = 0;
		document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";
	}
	if(points == 15 && mode ==2)
	{
		wintercontainer.hide();
		mode =3;
		springcontainer.show();
		points=0;
		frameCount = 0;
		document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";
	}
	if(points == 10 && mode ==3)
	{
		springcontainer.hide();
		mode =4;
		summercontainer.show();
		points=0;
		frameCount = 0;
		document.getElementById("score").innerHTML = "<h1>Coins: " + points + "<img src='images/coinoverlay.png' width ='40' height='40'>" + "</h1>";
	}
	if(mode == 1)
	{
		if(keyIsDown(87) && !leafsound.isPlaying() || keyIsDown(65) && !leafsound.isPlaying() || keyIsDown(83) && !leafsound.isPlaying() || keyIsDown(68) && !leafsound.isPlaying()) 
		{
			leafsound.play();
		}
	}
	if(mode == 2)
	{
		if(keyIsDown(87) && !snowsound.isPlaying() || keyIsDown(65) && !snowsound.isPlaying() || keyIsDown(83) && !snowsound.isPlaying() || keyIsDown(68) && !snowsound.isPlaying()) 
		{
			snowsound.play();
		}
	}
	if(mode == 3)
	{
		if(keyIsDown(87) && !grassound.isPlaying() || keyIsDown(65) && !grassound.isPlaying() || keyIsDown(83) && !grassound.isPlaying() || keyIsDown(68) && !grassound.isPlaying()) 
		{
			grassound.play();
		}
	}
	if(mode == 4)
	{
		if(keyIsDown(87) && !sandsound.isPlaying() || keyIsDown(65) && !sandsound.isPlaying() || keyIsDown(83) && !sandsound.isPlaying() || keyIsDown(68) && !sandsound.isPlaying()) 
		{
			sandsound.play();
		}
	}
}