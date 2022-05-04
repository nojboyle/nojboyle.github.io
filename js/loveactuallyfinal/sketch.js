// variable to hold a reference to our A-Frame world
let world;

// to handle multiple dynamic textures we can use a series of separate variables to hold
// a few off screen graphics buffers created using the 'createGraphics' function in p5
let buffer1, buffer2, buffer3, buffer4, buffer5, buffer6, buffer7, buffer8, buffer9;

let pbuffer1, pbuffer2, pbuffer3, pbuffer4, pbuffer5, pbuffer6, pbuffer7, pbuffer8;

let sbuffer1, sbuffer2, sbuffer3, sbuffer4, sbuffer5, sbuffer6, sbuffer7, sbuffer8, sbuffer9;

let ybuffer1, ybuffer2, ybuffer3;

// we will also need three variables to hold the dynamic textures that will be created using
// these three buffers
let texture1, texture2, texture3, texture4, texture5, texture6, texture7, texture8, texture9;

let ptexture1, ptexture2, ptexture3, ptexture4, ptexture5, ptexture6, ptexture7, ptexture8;

let stexture1, stexture2, stexture3, stexture4, stexture5, stexture6, stexture7, stexture8, stexture9;

let ytexture1, ytexture2, ytexture3;

let img1, img2, img3, img4, img5, img6, img7, img8, img9; 

let pmg1, pimg2, pimg3, pimg4, pimg5, pimg6, pimg7, pimg8;

let simg1, simg2, simg3, simg4, simg5, simg6, simg7, simg8, simg9;

let yimg1, yimg2, yimg3;

function preload() {
	img1 = loadImage('Helene_Paris_David.jpg');
	img2 = loadImage('psyche1.jpg');
	img3 = loadImage('psyche2.jpg');
	img4 = loadImage('psyche3.jpg');
	img5 = loadImage('psyche6.png');
	img6 = loadImage('psyche7.jpg');
	img7 = loadImage('psyche8.jpg');
	img8 = loadImage('psyche9.jpg');
	img9 = loadImage('psyche10.jpg');

	pimg1 = loadImage('philia1.jpg');
	pimg2 = loadImage('philia2.jpg');
	pimg3 = loadImage('philia3.jpg');
	pimg4 = loadImage('philia4.jpg');
	pimg5 = loadImage('philia5.jpg');
	pimg6 = loadImage('psyche5.jpg');
	pimg7 = loadImage('philia7.jpg');
	pimg8 = loadImage('psyche4.jpg');

	simg1 = loadImage('storge1.jpg');
	simg2 = loadImage('storge2.jpg');
	simg3 = loadImage('storge3.jpg');
	simg4 = loadImage('storge4.jpg');
	simg5 = loadImage('storge5.jpg');
	simg6 = loadImage('storge6.jpg');
	simg7 = loadImage('storge7.jpg');
	simg8 = loadImage('storge8.jpg');
	simg9 = loadImage('psyche5.jpg');

	yimg1 = loadImage('philautia1.jpg');
	yimg2 = loadImage('philautia2.jpg');
	yimg3 = loadImage('philautia3.jpg');
}

function setup() {
	// no main canvas - we will just use our off screen graphics buffers to hold our dynamic textures
	noCanvas();

	// construct the A-Frame world
	// this function requires a reference to the ID of the 'a-scene' tag in our HTML document
	world = new World('VRScene');

	// set the background color of the world
	world.setBackground(0,0,0);

	// create our three off screen graphics buffers, making sure that each is set up with dimensions
	// that are a power of 2
	buffer1 = createGraphics(256, 256);
	buffer2 = createGraphics(256, 256);
	buffer3 = createGraphics(256, 256);
	buffer4 = createGraphics(256, 256);
	buffer5 = createGraphics(256, 256);
	buffer6 = createGraphics(256, 256);
	buffer7 = createGraphics(256, 256);
	buffer8 = createGraphics(256, 256);
	buffer9 = createGraphics(256, 256);

	pbuffer1 = createGraphics(256, 256);
	pbuffer2 = createGraphics(256, 256);
	pbuffer3 = createGraphics(256, 256);
	pbuffer4 = createGraphics(256, 256);
	pbuffer5 = createGraphics(256, 256);
	pbuffer6 = createGraphics(256, 256);
	pbuffer7 = createGraphics(256, 256);
	pbuffer8 = createGraphics(256, 256);

	sbuffer1 = createGraphics(256, 256);
	sbuffer2 = createGraphics(256, 256);
	sbuffer3 = createGraphics(256, 256);
	sbuffer4 = createGraphics(256, 256);
	sbuffer5 = createGraphics(256, 256);
	sbuffer6 = createGraphics(256, 256);
	sbuffer7 = createGraphics(256, 256);
	sbuffer8 = createGraphics(256, 256);
	sbuffer9 = createGraphics(256, 256);

	ybuffer1 = createGraphics(256, 256);
	ybuffer2 = createGraphics(256, 256);
	ybuffer3 = createGraphics(256, 256);

	// set up these graphics buffers as dynamic textures
	texture1 = world.createDynamicTextureFromCreateGraphics( buffer1 );
	texture2 = world.createDynamicTextureFromCreateGraphics( buffer2 );
	texture3 = world.createDynamicTextureFromCreateGraphics( buffer3 );
	texture4 = world.createDynamicTextureFromCreateGraphics( buffer4 );
	texture5 = world.createDynamicTextureFromCreateGraphics( buffer5 );
	texture6 = world.createDynamicTextureFromCreateGraphics( buffer6 );
	texture7 = world.createDynamicTextureFromCreateGraphics( buffer7 );
	texture8 = world.createDynamicTextureFromCreateGraphics( buffer8 );
	texture9 = world.createDynamicTextureFromCreateGraphics( buffer9 );

	ptexture1 = world.createDynamicTextureFromCreateGraphics( pbuffer1 );
	ptexture2 = world.createDynamicTextureFromCreateGraphics( pbuffer2 );
	ptexture3 = world.createDynamicTextureFromCreateGraphics( pbuffer3 );
	ptexture4 = world.createDynamicTextureFromCreateGraphics( pbuffer4 );
	ptexture5 = world.createDynamicTextureFromCreateGraphics( pbuffer5 );
	ptexture6 = world.createDynamicTextureFromCreateGraphics( pbuffer6 );
	ptexture7 = world.createDynamicTextureFromCreateGraphics( pbuffer7 );
	ptexture8 = world.createDynamicTextureFromCreateGraphics( pbuffer8 );

	stexture1 = world.createDynamicTextureFromCreateGraphics( sbuffer1 );
	stexture2 = world.createDynamicTextureFromCreateGraphics( sbuffer2 );
	stexture3 = world.createDynamicTextureFromCreateGraphics( sbuffer3 );
	stexture4 = world.createDynamicTextureFromCreateGraphics( sbuffer4 );
	stexture5 = world.createDynamicTextureFromCreateGraphics( sbuffer5 );
	stexture6 = world.createDynamicTextureFromCreateGraphics( sbuffer6 );
	stexture7 = world.createDynamicTextureFromCreateGraphics( sbuffer7 );
	stexture8 = world.createDynamicTextureFromCreateGraphics( sbuffer8 );
	stexture9 = world.createDynamicTextureFromCreateGraphics( sbuffer9 );

	ytexture1 = world.createDynamicTextureFromCreateGraphics( ybuffer1 );
	ytexture2 = world.createDynamicTextureFromCreateGraphics( ybuffer2 );
	ytexture3 = world.createDynamicTextureFromCreateGraphics( ybuffer3 );

	// create three planes that will be use these textures
	let plane1 = new Plane({
		x:-6, y:3, z:-5,
		width:3, height:3,
		asset: texture1,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane2 = new Plane({
		x:0, y:3, z:-5,
		width:3, height:3,
		asset: texture2,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane3 = new Plane({
		x:6, y:3, z:-5,
		width:3, height:3,
		asset: texture3,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane4 = new Plane({
		x:24, y:3, z:-5,
		width:3, height:3,
		asset: texture4,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane5 = new Plane({
		x:30, y:3, z:-5,
		width:3, height:3,
		asset: texture5,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	let plane6 = new Plane({
		x:36, y:3, z:-5,
		width:3, height:3,
		asset: texture6,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
	let plane7 = new Plane({
		x:-24, y:3, z:-5,
		width:3, height:3,
		asset: texture7,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
		let plane8 = new Plane({
		x:-30, y:3, z:-5,
		width:3, height:3,
		asset: texture8,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
			let plane9 = new Plane({
		x:-36, y:3, z:-5,
		width:3, height:3,
		asset: texture9,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

			let plane10 = new Plane({
		x:34.5, y:3, z:10,
		width:3, height:3,
		asset: ptexture1,
		rotationY: 270,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
			let plane11 = new Plane({
		x:34.5, y:3, z:16,
		width:3, height:3,
		asset: ptexture2,
		rotationY: 270,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

			let pplane1 = new Plane({
		x:34.5, y:3, z:27,
		width:3, height:3,
		asset: ptexture3,
		rotationY: 270,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
			let pplane2 = new Plane({
		x:34.5, y:3, z:33,
		width:3, height:3,
		asset: ptexture4,
		rotationY: 270,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
			let pplane3 = new Plane({
		x:38.5, y:3, z:7.5,
		width:3, height:3,
		asset: ptexture5,
		rotationY: 180,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
			let pplane4 = new Plane({
		x:38.5, y:3, z:24.5,
		width:3, height:3,
		asset: ptexture7,
		rotationY: 180,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});
			let pplane5 = new Plane({
		x:38.5, y:3, z:18.5,
		width:3, height:3,
		asset: ptexture8,
		rotationY: 180,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	// add the planes to our world
	world.add(plane1);
	world.add(plane2);
	world.add(plane3);
	world.add(plane4);
	world.add(plane5);
	world.add(plane6);
	world.add(plane7);
	world.add(plane8);
	world.add(plane9);
	world.add(plane10);
	world.add(plane11);

	world.add(pplane1);
	world.add(pplane2);
	world.add(pplane3);
	world.add(pplane4);
	world.add(pplane5);

	// create a plane to serve as our "ground"
	let ground = new Plane({
		x:0, y:0, z:0,
		asset: 'tile',
		width:150, height:100,
		red: 128, green: 128, blue: 128,
		repeatX: 9,
		repeatY: 9,
		rotationX:-90, metalness:0.25
	});

	// add the ground to our world
	world.add(ground);

	let sky = new Sky({
		asset: 'sky1'
	});
	world.add(sky);

	 box = new Box({
      x:0, 
      y:0, 
      z:-6, 
      width: 20, 
      depth: 1, 
      height: 10, 
      red:255, 
      green:255, 
      blue:255
    });
    
    // add the box to the world
    world.add(box);

    sbox = new Box({
      x:0, 
      y:0, 
      z:40, 
      width: 20, 
      depth: 1, 
      height: 10, 
      red:255, 
      green:255, 
      blue:255
    });
    
    // add the box to the world
    world.add(sbox);

    box2 = new Box({
      x:30, 
      y:0, 
      z:-6,
      rotationX: 180, 
      width: 20, 
      depth: 1, 
      height: 10, 
      red:255, 
      green:255, 
      blue:255
    });
    
    // add the box to the world
    world.add(box2);

      sbox2 = new Box({
      x:23, 
      y:0, 
      z:35,
      rotationX: 180, 
      width: 20, 
      depth: 1, 
      height: 10, 
      red:255, 
      green:255, 
      blue:255
    });
    
    // add the box to the world
    world.add(sbox2);

     box3 = new Box({
      x:-30, 
      y:0, 
      z:-6,
      rotationX: 180, 
      width: 20, 
      depth: 1, 
      height: 10, 
      red:255, 
      green:255, 
      blue:255
    });
    
    // add the box to the world
    world.add(box3);

     sbox3 = new Box({
      x:-30, 
      y:0, 
      z:35,
      rotationX: 180, 
      width: 20, 
      depth: 1, 
      height: 10, 
      red:255, 
      green:255, 
      blue:255
    });
    
    // add the box to the world
    world.add(sbox3);

    var b2 = new Box({
						x:40, y:0, z:13,
						scaleX:10,
						scaleY:10,
						scaleZ:10,
						rotationY: 180,
						red: 255, green: 255, blue: 255 
	});
	world.add(b2);

	var b3 = new Box({
						x:40, y:0, z:30,
						scaleX:10,
						scaleY:10,
						scaleZ:10,
						rotationY: 180,
						red: 255, green: 255, blue: 255 
	});
	world.add(b3);

	var b4 = new Box({
						x:-40, y:0, z:13,
						scaleX:30,
						scaleY:10,
						scaleZ:10,
						rotationY: 180,
						red: 255, green: 255, blue: 255 
	});
	world.add(b4);

    pillar = new GLTF({
		asset: 'pillar',
		x: -17,
		y: -0.9,
		z: -20,
		scaleY:0.5,
		scaleX:0.6
	});
	world.add(pillar);

	spillar = new GLTF({
		asset: 'pillar',
		x: -24,
		y: -0.9,
		z: 45,
		scaleY:0.5,
		scaleX:0.6
	});
	world.add(spillar);

	spillar2 = new GLTF({
		asset: 'pillar',
		x: 24,
		y: -0.9,
		z: 45,
		scaleY:0.5,
		scaleX:0.6
	});
	world.add(spillar2);

	pillar2 = new GLTF({
		asset: 'pillar',
		x: 17,
		y: -0.9,
		z: -20,
		scaleY:0.5,
		scaleX:0.6
	});
	world.add(pillar2);


	pillar3 = new GLTF({
		asset: 'pillar',
		x: 35,
		y: -0.9,
		z: -20,
		scaleY:0.5,
		scaleX:0.6
	});
	world.add(pillar3);


	pillar4 = new GLTF({
		asset: 'pillar',
		x: -35,
		y: -0.9,
		z: -20,
		scaleY:0.5,
		scaleX:0.6
	});
	world.add(pillar4);

	var text = new Text({
		text: 'The Loves of Paris and Helen is a 1788 painting by Jacques-Louis David, showing Helen of Troy and Paris from Homers Iliad. It is now in the Louvre Museum. It was the result of a commission from the comte dArtois. Artist: Jacques-Louis David Period: Neoclassicism',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: -6, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text);

	var text2 = new Text({
		text: 'EROS',
		red:255, green:48, blue: 114,
		font: 'dejavu',
		side: 'front',
		x: 0, y: 25, z: -17,
		scaleX: 250, scaleY: 250, scaleZ: 5
	});
	world.add(text2);

	var textstorge = new Text({
		text: 'STORGE',
		red:215, green:184, blue: 255,
		font: 'dejavu',
		side: 'front',
		rotationY: 180,
		x: 0, y: 25, z: 50,
		scaleX: 250, scaleY: 250, scaleZ: 5
	});
	world.add(textstorge);

	var textphil = new Text({
		text: 'PHILIA',
		red:184, green:255, blue: 254,
		font: 'dejavu', 
		side: 'front',
		x: 40, y: 25, z: 22,
		rotationY:270,
		scaleX: 250, scaleY: 250, scaleZ: 5
	});
	world.add(textphil);

	var textphilautia = new Text({
		text: 'PHILAUTIA',
		red:187, green:255, blue: 179,
		font: 'dejavu', 
		side: 'front',
		x: -40, y: 25, z: 16,
		rotationY: 90,
		scaleX: 250, scaleY: 250, scaleZ: 5
	});
	world.add(textphilautia);

	var text3 = new Text({
		text: 'Psyche was a mortal woman. Because of her love and sacrifice for Eros (Cupid in Roman Mythology) she earned immortality. Psyche entering Cupid’s garden by J.W.Waterhouse – 1903 (Harris Museum)',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: 0, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text3);

		var text4 = new Text({
		text: 'Her beauty was famed everywhere, and men flocked to admire and pay homage to her. Despite being spared from Aphrodite’s wrath, Psyche still suffered, as no man was willing to marry her. Cupid Finding Psyche by E. Burne-Jones – 1865-67 (Manchester Art Gallery)',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: 6, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text4);

		var text5 = new Text({
		text: 'In his fury at her faithlessness, Eros fled. And this particular Greek myth ended joyously with Psyche and Eros living perpetually in the halls atop Mount Olympus. The abduction of Psyche by William Bouguereau – 1895 (Private Collection)',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: 24, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text5);

			var text6 = new Text({
		text: 'In the work of Francesca Strino, we can see the influence of previous artists in this subject, but the gods in her work seem much more human than divine, which gives the painting a more realistic touch. Love and Psyche by Francesca Strino',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: 30, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text6);

			var text7 = new Text({
		text: 'This winged young man who has just landed on a rock where a girl lies unconscious, is the god Eros – Cupid in Latin – and can be recognized by his wings and his quiver filled with arrows. The girl’s name is Psyche. Psyche revived by Cupid’s kiss by Antonio Canova – 1793 (Musée du Louvre)',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: 36, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text7);
			var text8 = new Text({
		text: 'Cupid (Roman deity), Lovers, Psyche (Greek deity), Female nude in art, Male nude in art, Painting, French, Cupid and Psyche David, Jacques-Louis',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: -24, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text8);

	var text9 = new Text({
		text: 'Gaspare LANDI (1756 – 1830) Psyche Revived by Cupid’s Kiss Oil on canvas Venice, Museo Correr',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: -30, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text9);

	var text10 = new Text({
		text: 'Gaspare LANDI (1756 – 1830) Psyche Revived by Cupid’s Kiss Oil on canvas Venice, Museo Correr © Archives Alinari, Florence, Dist. RMN / Mauro Magliani',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: -36, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text10);

	var ptext1 = new Text({
		text: 'Detail from Phidias Showing the Frieze of the Parthenon to His Friends by Lawrence Alma-Tadema (1868)',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 270, 
		x: 35, y: 0.8, z: 10.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	world.add(ptext1);

	var ptext2 = new Text({
		text: 'Philia is the brotherly or friendly form of love. Aristotle takes Philia to be both necessary as a means to happiness. Friendships of the good are ones where both friends enjoy each other’s characters. Brotherly Love by Susan Richardson',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 270, 
		x: 35, y: 0.8, z: 15.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	var ptext3 = new Text({
		text: 'Odysseus and Calypso. Red-figure vase. Clay. Paris, Louvre Museum.',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 270, 
		x: 35, y: 0.8, z: 32.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	world.add(ptext2);
	world.add(ptext3);

	var ptext33 = new Text({
		text: 'Briseis Painter. Erastes (lover) and eromenos (beloved) kissing. Detail from the tondo of a red-figure Attic cup, ca. 480 BC.',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 270, 
		x: 35, y: 0.8, z: 27.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	world.add(ptext33);


	var ptext4 = new Text({
		text: 'The Oath of the HoratiiDavid, Jacques-Louis. Swords, Allegory, Horatii (Legendary characters), Oaths, Sacrifice, France --History --Louis XVI, 1774-1793, Neoclassicism (Art), History paintings, Stoics, Painting, French --18th century',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 180, 
		x: 38.5, y: 0.8, z: 7.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	world.add(ptext4);

	var ptext4 = new Text({
		text: 'Arcadian Spring by Hanz Zatzka. Philia/Philotes is the personification of friendship (or also love among lovers), daughter of Nyx according to Hesiod. This Idea expresses a very high ethical value: the completely selfless disposition or inclination of the soul in doing good.',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 180, 
		x: 38.5, y: 0.8, z: 24.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	world.add(ptext4);

		var ptext5 = new Text({
		text: 'Psyche Being Robed by the Gods for Her Marriage with Cupid (sketch for the ceiling of the stairway at Kiveton) Louis Laguerre (1663–1721) Victoria and Albert Museum',
		red:16, green:65, blue: 227,
		side: 'double',
		rotationY: 360, 
		x: 38.5, y: 0.8, z: 18.5,
		scaleX: 5, scaleY:5, scaleZ:5 
	})

	world.add(ptext5);



	/*		var text7 = new Text({
		text: '',
		red: 255, green: 48, blue: 114,
		side: 'double',
		x: 36, y: 0.8, z: -5,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(text7); */

	let splane1 = new Plane({
		x:30, y:3, z:34,
		width:3, height:3,
		asset: stexture1,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext1 = new Text({
		text: 'Karl Friedrich Lessings The Robber and his Child (1832). Here, the robber is a defeated man who may have turned to stealing to feed the child he so tenderly shelters under his arm. Isolated in a harsh, rocky landscape, the figures invite our sympathy.',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: 30, y: 0.8, z: 34,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext1);

	world.add(splane1);

	let splane2 = new Plane({
		x:24, y:3, z:34,
		width:3, height:3,
		asset: stexture2,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext2 = new Text({
		text: 'Springtime 1873 Pierre-Auguste Cot, visitors delighted in "this reveling pair of children, drunken with first love ... this Arcadian idyll, peppered with French spice.',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: 24, y: 0.8, z: 34,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext2);

	world.add(splane2);

	let splane3 = new Plane({
		x:18, y:3, z:34,
		width:3, height:3,
		asset: stexture3,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext3 = new Text({
		text: 'Auguste Jean Baptiste Vinchon. Propertius and Cynthia at Tivoli. Cynthia, while she is fast asleep in her bedroom. In his amorous and drunken state he is tempted to wake her, but holds off for fear of angering her. He, instead, watches her sleep',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: 18, y: 0.8, z: 34,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext3);

	world.add(splane3);

	let splane4 = new Plane({
		x:7, y:3, z:39,
		width:3, height:3,
		asset: stexture4,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext4 = new Text({
		text: 'Storge is a wide-ranging force which can apply between family members, friends, pets and their owners, companions or colleagues. It can also blend with and help underpin other types of tie such as passionate love or friendship.',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: 7, y: 0.8, z: 39,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext4);

	world.add(splane4);

	let splane5 = new Plane({
		x:0, y:3, z:39,
		width:3, height:3,
		asset: stexture5,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext5 = new Text({
		text: 'A Greek sculpture from the fourth century B.C. Photo by Tilemahos Efthimiadis.',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: 0, y: 0.8, z: 39,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext5);

	world.add(splane5);

	let splane6 = new Plane({
		x:-7, y:3, z:39,
		width:3, height:3,
		asset: stexture6,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext6 = new Text({
		text: 'Sappho and Phaon. David, Jacques-Louis. Sappho is shown sitting in a chair at the foot of a bed in a classically decorated room with columns, a marble floor and a view to a rural landscape outside. Phaon stands behind the chair holding a spear and bow. On her knee is a scroll with verses',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: -7, y: 0.8, z: 39,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext6);

	world.add(splane6);

	let splane7 = new Plane({
		x:-24, y:3, z:34,
		width:3, height:3,
		asset: stexture7,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext7 = new Text({
		text: 'Jacob and Rachel Leaving the House of Laban by Charles-Joseph Natoire, 1732, High Museum of Art',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: -24, y: 0.8, z: 34,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext7);

	world.add(splane7);


	let splane8 = new Plane({
		x:-30, y:3, z:34,
		width:3, height:3,
		asset: stexture8,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext8 = new Text({
		text: 'The School of Athens, Raphael. It was painted between 1509 and 1511 as a part of Raphaels commission to decorate the rooms now known as the Stanze di Raffaello, in the Apostolic Palace in the Vatican.',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: -30, y: 0.8, z: 34,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext8);

	world.add(splane8);

	let splane9 = new Plane({
		x:-36, y:3, z:34,
		width:3, height:3,
		asset: stexture9,
		rotationY: 360,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var stext9 = new Text({
		text: 'Psyche Received on Olympus (detail), Raphael, Date: 1517, Style: High Renaissance, Genre: mythological painting',
		red: 95, green: 37, blue: 153,
		side: 'double',
		rotationY: 180,
		x: -36, y: 0.8, z: 34,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(stext9);

	world.add(splane9);

	let yplane1 = new Plane({
		x:-24.5, y:3, z:16,
		width:3, height:3,
		asset: ytexture1,
		rotationY: 90,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var ytext1 = new Text({
		text: 'Young Woman Drawing, David, Jacques-Louis. Villers, Marie-Denise. Although little known today, Villers was a gifted pupil of Girodet and exhibited in the salons, where her portraits attracted attention.',
		red: 21, green: 97, blue: 44,
		side: 'double',
		rotationY: 90,
		x: -24.5, y: 0.8, z: 15,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(ytext1);

	world.add(yplane1);

	let yplane2 = new Plane({
		x:-27.5, y:3, z:19,
		width:3, height:3,
		asset: ytexture2,
		rotationY: 180,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var ytext2 = new Text({
		text: 'John Roddam Spencer Stanhope (English, 1829–1908). Love and the Maiden, 1877. Love and the Maiden represents the longings and aspirations of an artistic generation seeking relief from the grim realities of urban life created by the onslaught of the Industrial Revolution.',
		red: 21, green: 97, blue: 44,
		side: 'double',
		rotationY: 0,
		x: -27.5, y: 0.8, z: 19,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(ytext2);

	world.add(yplane2);

	let yplane3 = new Plane({
		x:-24.5, y:3, z:10,
		width:3, height:3,
		asset: ytexture3,
		rotationY: 90,
		side: 'double',
		dynamicTexture: true,
		dynamicTextureWidth: 256,
		dynamicTextureHeight: 256
	});

	var ytext3 = new Text({
		text: 'Nicolas Poussin, Echo and Narcissus, painting, circa 1630. Narcissus saw his reflection in the waters, and became so obsessed with his own image that his desire for himself turned into the same sort of pain she had felt, and he, too, withered away to nothingness.',
		red: 21, green: 97, blue: 44,
		side: 'double',
		rotationY: 90,
		x: -24.5, y: 0.8, z: 10,
		scaleX: 5, scaleY: 5, scaleZ: 5
	});
	world.add(ytext3);

	world.add(yplane3);



}

// texture 3 will implement a more complicated algorithm (a random walk)

function draw() {
	// here we can manipulate our three separate off screen graphics buffers, which will translate
	// into changes in the three dynamic textures in our world

	// texture1 - random black and white squares
	buffer1.image(img1, 0, 0);

	// texture2 - random colored ellipses
	buffer2.image(img2, 0, 0);

	// texture3 - random walker
	buffer3.image(img3, 0, 0);
	buffer4.image(img4, 0, 0);
	buffer5.image(img5, 0, 0);
	buffer6.image(img6, 0, 0);
	buffer7.image(img7, 0, 0);
	buffer8.image(img8, 0, 0);
	buffer9.image(img9, 0, 0);

	pbuffer1.image(pimg1, 0, 0);
	pbuffer2.image(pimg2, 0, 0);
	pbuffer3.image(pimg3, 0, 0);
	pbuffer4.image(pimg4, 0, 0);
	pbuffer5.image(pimg5, 0, 0);
	pbuffer6.image(pimg6, 0, 0);
	pbuffer7.image(pimg7, 0, 0);
	pbuffer8.image(pimg8, 0, 0);

	sbuffer1.image(simg1, 0, 0);
	sbuffer2.image(simg2, 0, 0);
	sbuffer3.image(simg3, 0, 0);
	sbuffer4.image(simg4, 0, 0);
	sbuffer5.image(simg5, 0, 0);
	sbuffer6.image(simg6, 0, 0);
	sbuffer7.image(simg7, 0, 0);
	sbuffer8.image(simg8, 0, 0);
	sbuffer9.image(simg9, 0, 0);

	ybuffer1.image(yimg1, 0, 0);
	ybuffer2.image(yimg2, 0, 0);
	ybuffer3.image(yimg3, 0, 0);

}
