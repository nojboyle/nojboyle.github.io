let poweractivate = 0;
let tile = 0;
class Player {
  constructor(x, y, world) {
    this.x = x;
    this.y = y;
    this.currentpower = poweractivate;
    this.world = world;
    this.tile = tile;

    this.artworkLeft = loadImage('tiles/p1leftmove.gif');
    this.artworkRight = loadImage('tiles/p1rightmove.gif');
    this.artworkUp = loadImage('tiles/p1upmove.gif');
    this.artworkDown = loadImage('tiles/p1downmove.gif');
    this.protagonist = protagonist;

    this.currentImage = this.artworkRight;

    this.speed = 5;
  }
  display() {
    imageMode(CORNER);
    image(this.currentImage, this.x, this.y);
  }
  refreshSensors() {
    this.left = [this.x, this.y + this.currentImage.height / 2];
    this.right = [this.x + this.currentImage.width, this.y + this.currentImage.height / 2];
    this.top = [this.x + this.currentImage.width / 2, this.y + this.currentImage.height - 50];
    this.bottom = [this.x + this.currentImage.width / 2, this.y + this.currentImage.height - 10];
  }

  /*breakwallleft()
  {
     this.tile = this.world.getTile(this.left[0], this.left[1]);

     if(this.world.isTileBreakable(this.tile) == true && this.tile == 5 &&keyIsDown(90))
      {
        this.tile == 3;
      }
  }
  breakwallright()
  {
     this.tile = this.world.getTile(this.right[0], this.right[1]);

     if(this.world.isTileBreakable(this.tile) == true && this.tile == 5 &&keyIsDown(90))
      {
        this.tile == 3;
      }
  }
  breakwalldown()
  {
     this.tile = this.world.getTile(this.bottom[0], this.bottom[1]);

     if(this.world.isTileBreakable(this.tile) == true && this.tile == 5 &&keyIsDown(90))
      {
        this.tile == 3;
      }
  }
  breakwallup()
  {
     this.tile = this.world.getTile(this.top[0], this.top[1]);

     if(this.world.isTileBreakable(this.tile) == true && this.tile == 5 &&keyIsDown(90))
      {
        this.tile == 3;
      }
  }*/
  move() {
    this.refreshSensors();

    
    if (keyIsDown(LEFT_ARROW) || keyIsDown(97) || keyIsDown(65)) {
  
      this.tile = this.world.getTile(this.left[0], this.left[1]);
    
      if (this.tile == "roomChange") {
       
        this.world.changeRoom("left");

        this.x = width - this.currentImage.width;
      }

      else {


        if (!this.world.isTileSolid(this.tile)) {
          
          this.x -= this.speed;
        }
      }

    
      this.currentImage = this.artworkLeft;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(100) || keyIsDown(68)) {
    
      this.tile = this.world.getTile(this.right[0], this.right[1]);

      
      if (this.tile == "roomChange") {
        
        this.world.changeRoom("right");

        this.x = 0 + this.currentImage.width;
      }

      else {

        if (!this.world.isTileSolid(this.tile)) {
          
          this.x += this.speed;
        }
      }

      
      this.currentImage = this.artworkRight;
    }
    if (keyIsDown(DOWN_ARROW) || keyIsDown(115) || keyIsDown(83)) {
   
      this.tile = this.world.getTile(this.bottom[0], this.bottom[1]);

     
      if (this.tile == "roomChange") {
       
        this.world.changeRoom("down");

        this.y = 0 + this.currentImage.height;
      }

     
      else {

 
        if (!this.world.isTileSolid(this.tile)) {
         
          this.y += this.speed;
        }
      }

     
      this.currentImage = this.artworkDown;
    }
    if (keyIsDown(UP_ARROW) || keyIsDown(119) || keyIsDown(87)) {
    
      this.tile = this.world.getTile(this.top[0], this.top[1]);

     
      if (this.tile == "roomChange") {
       
        this.world.changeRoom("up");

        
        this.y = height - this.currentImage.height;
      }

      else {

        
        if (!this.world.isTileSolid(this.tile)) {

          this.y -= this.speed;
        }
      }

      this.currentImage = this.artworkUp;
    }
  }
}

