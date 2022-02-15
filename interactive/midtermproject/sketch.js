
let mode;
let theWorld;
let thePlayer;
let waterpower;
let firepower;
let watersprite, firesprite;
let watermagic, firemagic;
let magma, permafrost;
let qparticle;
let charselect1;
let charselect2;
let element = "";
let direction = "";
let pSystem = [];
let pSystem2 = [];
let waterproj;
let fireproj;
let stamina = 400;
let fakeStamina = 400;
let fakemaxStamina = 400;
let maxStamina = 400;
let protagonist = 0;
let worldParameters = {
  tileSize: 50,
  tileFolder: 'tiles',
  numTiles: 15,
  solidTiles: {0:true, 2:true, 4:true, 5:true, 12:true, 13:true, 14:true},
  breakTiles: {5:true, 14:true}
};

let roomData;


function preload() {

  roomData = loadJSON("data/rooms.json");

 
  theWorld = new OverheadWorld(worldParameters);


  thePlayer = new Player(200, 450, theWorld);

  waterpower = new Power(500, 100, "water");
  firepower = new Power(100, 100, "fire");
  waterproj = loadImage('tiles/waterprojectile.gif');
  fireproj = loadImage('tiles/fireprojectile.gif');
  mysterymazelogo = loadImage('mysterymazelogo2.png');
  charselect1 = loadImage('tiles/protagonist1.gif');
  charselect2 = loadImage('tiles/protagonist2.gif');
  firesprite = loadImage('tiles/firesprite.gif');
  watersprite = loadImage('tiles/watersprite.gif');
  watermagic = loadImage('tiles/watermagic.gif');
  firemagic = loadImage('tiles/firemagic.gif');
  magma = loadImage('tiles/magma.png');
  permafrost = loadImage('tiles/permafrost.png');
  qparticle = loadImage('tiles/questionmarkslightlylarger.gif');
  qparticle2 = loadImage('tiles/questionmarkmedium.gif');
  qparticle3 = loadImage('tiles/questionmarksmall.gif');
}

function setup() {
  mode = 0;
  createCanvas(900,1500);

  theWorld.setupRooms( roomData, "start" );
}

function allDone(worldData) {
  console.log("here");
}

function badStuffHappened(result) {
  console.log(result);
}

function draw() {

 if (mode ==0)
 {
    background(0);
    fill(255);
    textSize(45);
    image(mysterymazelogo, width/2 - 250, height/2-350);
    if(frameCount % 60 < 30)
    {
      text('PRESS ENTER TO START',width/2 - 265,height/2);
    }
    if (keyIsDown(13))
    {
      mode = 1;
    }
    /*let x = random(0, width);
    let y = random(0, height);
    image(qparticle,x,y);*/
  }
  if (mode ==1)
  {
    background(0);
    fill(255);
    textSize(45);
    text("SELECT CHARACTER",width/2-250,125);
    image(charselect1, width/2 - 400, height/2 - 310);
    image(charselect2, width/2 + 100, height/2 - 350);
    text("P1",width/2 - 290, 400);
    text("P2",width/2 + 225, 400);
    if(frameCount % 60 < 30)
    {
    textSize(45);  
    text('CLICK A CHARACTER TO PLAY',width/2 - 325,height/2+300);
    }
    if (mouseIsPressed && mouseX > width/2)
    {
      mode = 2;
    }
    if (mouseIsPressed && mouseX < width/2)
    {
      mode = 2;
    }
    /*if (frameCount % 60 <30)
    {
    let x = random(0, width);
    let y = random(0, height);
    image(qparticle2,x,y);
    }*/
  }
  if (mode ==2)
  {
    background(0);
    fill(255);
    textSize(45);
    text("DIRECTIONS",width/2-150,125);
    noStroke();
    ellipse(90,200,25,25);
    ellipse(90,240,25,25);
    ellipse(90,310,25,25);
    ellipse(90,720,25,25);
    textSize(30);
    text("Move your character using WASD or the arrow keys", 130, 210);
    text("Hold down 'Z' to shoot forth your currently aspected", 130, 250);
    text("element", 130, 285);
    text("Find an elemental sprite to attune yourself to a new", 130, 320);
    text("element", 130, 350);
    text("Water Sprite", 100, 625);
    text("Fire Sprite", 650, 625);
    text("Water Magic can destroy Magma blocks, while", 130, 715);
    text("Fire Magic can melt Permafrost",130,760);
    text("Water Magic", 100, 975);
    text("Fire Magic", 645, 975);
    text("Magma", 125, 1225);
    text("Permafrost", 645, 1225);
    image(watersprite, 100, 400);
    image(firesprite, 600, 435);
    image(watermagic, 100, 790);
    image(firemagic, 640, 800);
    image(magma, 115, 1035);
    image(permafrost, 655, 1035);
    if(frameCount % 60 < 30)
    {
    textSize(45);
    text('PRESS ENTER TO CONTINUE',width/2 - 300,height/2+650);
    }
    if (keyIsDown(13))
    {
      mode = 3;
    }
    /*if (frameCount %60 < 30)
    {
    let x = random(0, width);
    let y = random(0, height);
    image(qparticle2,x,y);
    }*/
  }
  if (mode ==3)
  {
    background(0);
    fill(255);
    textSize(45);
    text("DIRECTIONS",width/2-150,125);
    noStroke();
    textSize(30);
    ellipse(90,200,25,25);
    text("Pay attention to your stamina bar! You need it to use", 130, 210);
    text("magic, and it regenerates slowly over time", 130, 250);
    fakeStamina = min(fakemaxStamina, --fakeStamina);
     if (fakeStamina < 0)
      {
        fakeStamina = 400;
      }
  
     stroke(255);
     strokeWeight(4);
     noFill();
     rect(350, 300, 200, 20);
     noStroke();
     fill(0, 0, 255);
     rect(350, 300, map(fakeStamina, 0, fakemaxStamina, 0, 200), 20);
     noStroke();
     noFill();
     fill(255);
     ellipse(90,450,25,25);
     text("Escape to the end of the maze as quickly as you can", 130, 450);
     text("in order to win!", 130, 495);
    if(frameCount % 60 < 30)
    {
    textSize(45);
    text('CLICK TO ENTER THE MAZE...',width/2 - 300,height/2+200);
    }
    if (mouseIsPressed)
    {
      mode = 4;
    }
    /*let x = random(0, width);
    let y = random(0, height);
    image(qparticle2,x,y);*/
  }

  if (mode ==4)
  {
    if (keyIsDown(88))
    {
      console.log(thePlayer.x);
      console.log(thePlayer.y);
    }
  let regen = frameCount;
  theWorld.displayWorld()
  stamina = min(maxStamina, stamina);
  if (stamina < maxStamina)
    {
      stamina += 1;
    }
  if (thePlayer.currentpower >=1)
  {
    stroke(0);
    strokeWeight(4);
    noFill();
    rect(10, 10, 200, 20);
    if (stamina >0)
    {
    noStroke();
    fill(0, 0, 255);
    rect(10, 10, map(stamina, 0, maxStamina, 0, 200), 20);
    }
  }
  /*if(theWorld.isTileBreakable(5) == true)
  {
    console.log(theWorld.tileLibrary.id);
  }*/
  thePlayer.move();
  thePlayer.display();
  waterpower.changepower();
  firepower.changepower();
  /*thePlayer.breakwallleft();
  thePlayer.breakwallright();
  thePlayer.breakwallup();
  thePlayer.breakwalldown();*/
  if (theWorld.roomCurrent == "start" || theWorld.roomCurrent == "start2")
  {
    waterpower.display();
  }
  if (theWorld.roomCurrent == "firestart" || theWorld.roomCurrent == "firestart2" || theWorld.roomCurrent == "firestart3" || theWorld.roomCurrent == "firestart4")
  {
    firepower.display();
  }

  if (keyIsDown(90) && theWorld.roomCurrent == "start" && thePlayer.currentpower == 1 && (thePlayer.x <= 655 && thePlayer.x >= 638) && (thePlayer.y >= 145 && thePlayer.y <=165))
  {
    theWorld.setupRooms( roomData, "start2" );
  }
  if (keyIsDown(90) && theWorld.roomCurrent == "firestart" && thePlayer.currentpower == 1 && (thePlayer.x <= 795 && thePlayer.x >= 778) && (thePlayer.y >= 3 && thePlayer.y <=23))
  {
    theWorld.setupRooms( roomData, "firestart2" );
  }
  if (keyIsDown(90) && theWorld.roomCurrent == "firestart2" && thePlayer.currentpower == 1 && (thePlayer.x <= 195 && thePlayer.x >= 180) && (thePlayer.y >= 207 && thePlayer.y <=229))
  {
    theWorld.setupRooms( roomData, "firestart3" );
  }
  if (keyIsDown(90) && theWorld.roomCurrent == "firestart3" && thePlayer.currentpower == 1 && (thePlayer.x <= 45 && thePlayer.x >= 32) && (thePlayer.y >= 207 && thePlayer.y <=229))
  {
    theWorld.setupRooms( roomData, "firestart4" );
  }
  if (keyIsDown(90) && theWorld.roomCurrent == "sub2room1" && thePlayer.currentpower == 1 && (thePlayer.x <= 185 && thePlayer.x >= 170) && (thePlayer.y >= 865 && thePlayer.y <=883))
  {
    theWorld.setupRooms( roomData, "sub2room2" );
  }
  if (keyIsDown(90) && theWorld.roomCurrent == "icestart" && thePlayer.currentpower == 2 && (thePlayer.x <= 389 && thePlayer.x >= 376) && (thePlayer.y >= 1302 && thePlayer.y <=1325))
  {
    theWorld.setupRooms( roomData, "icestart2" );
  }





  if (thePlayer.currentpower == 1 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkDown)
  {
    let temp = new Drop(thePlayer.x-100, thePlayer.y + 85);
    
    pSystem.push( temp )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }

  for (let i = 0; i < pSystem.length; i++) {
    let result = pSystem[i].moveAndDisplay()
    if (result == "gone") {
     
      pSystem.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem.splice(0, pSystem.length);
        }
  }
  }
  if (thePlayer.currentpower == 2 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkDown)
  {
    let temp1 = new Drop2(thePlayer.x-100, thePlayer.y + 85);
    
    pSystem2.push( temp1 )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }

  for (let i = 0; i < pSystem2.length; i++) {
    let result = pSystem2[i].moveAndDisplay()
    if (result == "gone") {
      
      pSystem2.splice(i, 1)
      i -= 1
    }
    /*let dd = dist(pSystem2[i].x, pSystem2[i].y,theWorld.tileMap[thePlayer.tile],theWorld.tileMap[thePlayer.tile])*/
    if (/*dd < 10 &&*/ thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem2.splice(0, pSystem2.length);
        }
  }
  }
  
  if (thePlayer.currentpower == 1 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkUp)
  {
    let temp = new Drop(thePlayer.x - 100, thePlayer.y-30);
   
    pSystem.push( temp )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }
  
  for (let i = 0; i < pSystem.length; i++) {
    let result = pSystem[i].moveAndDisplay2()
    if (result == "gone") {
      
      pSystem.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem.splice(0, pSystem.length);
        }
    if (thePlayer.world.isTileBreakable(thePlayer.tile) == true && keyIsDown(90)) {
      theWorld.tileLibrary[thePlayer.tile].id = 3;
    }
  }
  }
  if (thePlayer.currentpower == 2 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkUp)
  {
    let temp1 = new Drop2(thePlayer.x - 100, thePlayer.y-30);
    
    pSystem2.push( temp1 )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }
  
  for (let i = 0; i < pSystem2.length; i++) {
    let result = pSystem2[i].moveAndDisplay2()
    if (result == "gone") {
     
      pSystem2.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem2.splice(0, pSystem2.length);
        }
  }
  }
   if (thePlayer.currentpower == 1 && keyIsDown(90)  && stamina > 0 && thePlayer.currentImage == thePlayer.artworkRight)
  {
    let temp = new Drop(thePlayer.x + 10, thePlayer.y + 50);
  
    pSystem.push( temp )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }
  
  for (let i = 0; i < pSystem.length; i++) {
    let result = pSystem[i].moveAndDisplay3()
    if (result == "gone") {
      
      pSystem.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem.splice(0, pSystem.length);
        }
  }
  }
  if (thePlayer.currentpower == 2 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkRight)
  {
    let temp1 = new Drop2(thePlayer.x + 10, thePlayer.y + 50);
   
    pSystem2.push( temp1 )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }
 
  for (let i = 0; i < pSystem2.length; i++) {
    let result = pSystem2[i].moveAndDisplay3()
    if (result == "gone") {
      
      pSystem2.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem2.splice(0, pSystem2.length);
        }
  }
  }
  if (thePlayer.currentpower == 1 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkLeft)
  {
    let temp = new Drop(thePlayer.x - 175, thePlayer.y + 50);
 
    pSystem.push( temp )
    if (stamina >0)
    {
      stamina -= 10;
    }

    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }
  
  for (let i = 0; i < pSystem.length; i++) {
    let result = pSystem[i].moveAndDisplay4()
    if (result == "gone") {
      
      pSystem.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem.splice(0, pSystem.length);
        }
     if (thePlayer.world.isTileBreakable(thePlayer.tile) == true) {
      thePlayer.tile = 3;
    }
  }
  }
  if (thePlayer.currentpower == 2 && keyIsDown(90) && stamina > 0 && thePlayer.currentImage == thePlayer.artworkLeft)
  {
    let temp1 = new Drop2(thePlayer.x - 175, thePlayer.y + 50);

    pSystem2.push( temp1 )
    if (stamina >0)
    {
      stamina -= 10;
    }
    if (stamina<=0)
    {
      pSystem.splice(0,pSystem.length);
      pSystem2.splice(0,pSystem2.length);
    }
 
  for (let i = 0; i < pSystem2.length; i++) {
    let result = pSystem2[i].moveAndDisplay4()
    if (result == "gone") {
      
      pSystem2.splice(i, 1)
      i -= 1
    }
    if (thePlayer.world.isTileSolid(thePlayer.tile) == true) {
          
          pSystem2.splice(0, pSystem2.length);
        }
  }
  }
  if (keyIsDown(90) && (keyIsDown(UP_ARROW) || keyIsDown(119) || keyIsDown(87)))
  {
    for (let i=0; i < pSystem.length; i++)
    {
      if (i>=1)
      {
        pSystem.splice(0, pSystem.length);
      }
    }
    for (let i=0; i < pSystem2.length; i++)
    {
      if (i>=1)
      {
        pSystem2.splice(0, pSystem2.length);
      }
    }
  }
  if (keyIsDown(90) && (keyIsDown(DOWN_ARROW) || keyIsDown(115) || keyIsDown(83)))
  {
    for (let i=0; i < pSystem.length; i++)
    {
      if (i>=1)
      {
        pSystem.splice(0, pSystem.length);
      }
    }
    for (let i=0; i < pSystem2.length; i++)
    {
      if (i>=1)
      {
        pSystem2.splice(0, pSystem2.length);
      }
    }
  }
  if (keyIsDown(90) && (keyIsDown(RIGHT_ARROW) || keyIsDown(100) || keyIsDown(68)))
  {
    for (let i=0; i < pSystem.length; i++)
    {
      if (i>=1)
      {
        pSystem.splice(0, pSystem.length);
      }
    }
    for (let i=0; i < pSystem2.length; i++)
    {
      if (i>=1)
      {
        pSystem2.splice(0, pSystem2.length);
      }
    }
  }
  if (keyIsDown(90) && (keyIsDown(LEFT_ARROW) || keyIsDown(97) || keyIsDown(65)))
  {
    for (let i=0; i < pSystem.length; i++)
    {
      if (i>=1)
      {
        pSystem.splice(0, pSystem.length);
      }
    }
    for (let i=0; i < pSystem2.length; i++)
    {
      if (i>=1)
      {
        pSystem2.splice(0, pSystem2.length);
      }
    }
   }
  }
 }
function keyReleased()
{
  for (let i=0; i < pSystem.length; i++)
  {
    if (i>=1)
    {
      pSystem.splice(0, pSystem.length);
    }
  }
  for (let i=0; i < pSystem2.length; i++)
  {
    if (i>=1)
    {
      pSystem2.splice(0, pSystem2.length);
    }
  }
}

class Power{
  constructor(x,y,element)
  {
    this.x = x;
    this.y = y;
    this.ele = element;
    this.waterelement = loadImage('tiles/waterpower.gif');
    this.firelement = loadImage('tiles/firepower.gif');
    this.currentImage =  this.waterelement;
  }
  display() {
    if(this.ele == "water")
    {
      imageMode(CORNER);
      image(this.currentImage, this.x, this.y);
    }
    if(this.ele == "fire")
    {
      this.currentImage = this.firelement;
      image(this.currentImage, this.x, this.y);
    }
  }
  changepower()
  {
    let d=dist(this.x,this.y, thePlayer.x, thePlayer.y)
    if(d<=37 && thePlayer.currentpower == 0 && this.ele=="water")
    {
        thePlayer.currentpower += 1;
    }
    if(d<30 && thePlayer.currentpower == 1 && this.ele=="fire")
    {
      thePlayer.currentpower += 1;
    }
  }
}
class Drop {
  constructor(x,y) {
    this.x = x
    this.startingX = this.x;
    this.y = y
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(2,3);
    this.alpha = 255
    this.radius = random(10,30)
  }
  delete()
  {
    let d=dist();
  }
  moveAndDisplay() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.x += this.xSpeed
    this.y += this.ySpeed
    image(waterproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
  moveAndDisplay2() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.xSpeed = random (-5,5);
    this.x += this.xSpeed
    this.y -= this.ySpeed
    image(waterproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
  moveAndDisplay3() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.xSpeed = 5;
    this.ySpeed = random(-5,5);
    this.y += this.ySpeed;
    this.x += this.xSpeed;
    image(waterproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.x < this.startingX)
    {
      this.x -= this.xSpeed ;
    }

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
  moveAndDisplay4() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.xSpeed = -5;
    this.ySpeed = random(-5,5);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    image(waterproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.x > this.startingX)
    {
      this.x -= this.xSpeed ;
    }

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
}
class Drop2 {
  constructor(x,y) {
    this.x = x
    this.startingX = this.x;
    this.y = y
    this.xSpeed = random(-1, 1);
    this.ySpeed = random(2,3);
    this.alpha = 255
    this.radius = random(10,30)
  }
  delete()
  {
    let d=dist();
  }
  moveAndDisplay() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.x += this.xSpeed
    this.y += this.ySpeed
    image(fireproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
  moveAndDisplay2() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.xSpeed = random (-5,5);
    this.x += this.xSpeed
    this.y -= this.ySpeed
    image(fireproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
  moveAndDisplay3() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.xSpeed = 5;
    this.ySpeed = random(-5,5);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    image(fireproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.x < this.startingX)
    {
      this.x -= this.xSpeed ;
    }

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
  moveAndDisplay4() {
    fill(0,0,255, this.alpha)
    noStroke()
    this.xSpeed = -5;
    this.ySpeed = random(-5,5);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    image(fireproj, this.x, this.y, this.alpha);
    this.alpha -= 3

    if (this.x > this.startingX)
    {
      this.x -= this.xSpeed ;
    }

    if (this.alpha < 0) {
      return "gone"
    }
    else {
      return "ok"
    }
  }
}