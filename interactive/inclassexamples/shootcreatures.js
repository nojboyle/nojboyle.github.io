let creatures = [];
let projectiles = [];

function setup() {
  createCanvas(500, 500);

  for ( let i = 0; i < 100; i++)
    {
      creatures.push( new Walker());
    }
}

function draw() {
  background(0);

  for (let i = 0; i <100; i++)
    {

      if (creatures[i].alive == false)
      {
        creatures.splice(i, 1);
        i--;
        continue;
      }

      creatures[i].move();
      creatures[i].display();
    }

  for (let i = 0; i < projectiles.length; i++)
    {
      projectiles[i].move();

      let hit = projectiles[i].checkCollision();
      if (hit == true){
        projectiles.splice(i, 1);
        i--;
        continue;
      }

      projectiles[i].display();
    }

  fill(128);
  rectMode(CENTER);
  rect(mouseX, height-50, 50, 100);
}

function mousePressed()
{
  projectiles.push( new Projectile(mouseX, height-50))
}

class Projectile {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  move(){
    this.y -= 5;
  }

  display(){
    fill(0, 255, 0);
    ellipse(this.x, this.y, 10, 10);
  }

  checkCollision()
  {
    for (let i = 0; i < creatures.length; i++)
      {
        let d = dist(this.x, this.y, creatures[i].x, creatures[i].y);

        if (d < 20)
          {
            creatures[i].alive = false;
            return true;
          }
      }
    return false;
  }
}


class Walker{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.noiseX = random(0, 1000);
    this.noiseY = random(1000, 2000);
    this.alive = true;
  }

  move(){

    let xMove = map(noise(this.noiseX), 0, 1, -3, 3);
    let yMove = map(noise(this.noiseY), 0, 1, -3, 3);
    this.x += xMove;
    this.y += yMove;
    this.noiseX += 0.01;
    this.noiseY += 0.01;

    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, height-200);
  }

  display(){
    fill(255);
    ellipse(this.x, this.y, 30, 30);
  }
}
