function setup() {
  theCanvas = createCanvas(400, 400);
  test.display();
}

function draw() {
  background(128);
  test.move();
  test.display();
}



class Mover {
  constructor(){
    console.log("An object is created!");
    // put some data into the newly created object
    this.x = 250;
    this.y = 300;
    this.name = 'pikachu';
  }
}

let test1 = new Mover(50, 75);
let test2 = new Mover(100, 300);
let test3 = new Mover(700, 12);
console.log(test1);
console.log(test2);
console.log(test3);

let test = {
  'x':250,
  'y':250,
  'red':255,
  'green':0,
  'blue':0,
  'display': function(){
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, 50, 50);
  },
  'move': function() {
    this.x += 1;

  }
}


/*
let names = {
  "craig":100,
  "pikachu":70,
  "favorite_pokemon": {
  "top":"pikachu",
  "second":"charmander"
},
  "sayHi": function(){
    console.log("hello there!");
    console.log(this.pikachu);
  }
};

console.log(names);
console.log(typeof(names));
console.log(names.craig);
console.log(names['craig']);
console.log(names.favorite_pokemon.second);
names.sayHi();*/

/*
function setup() {
  theCanvas = createCanvas(400, 400);
  test.display();
}

function draw() {
  background(128);
  test.move();
  test.display();
}



class Mover {
  constructor(){
    console.log("An object is created!");
    // put some data into the newly created object
    this.x = 250;
    this.y = 300;
    this.name = 'pikachu';
  }

  reportPosition() {
    console.log(this.x, this.y);
  }
}

let test1 = new Mover(50, 75);
let test2 = new Mover(100, 300);
let test3 = new Mover(700, 12);
// ask the movers to report their positions

console.log(test1);
console.log(test2);
console.log(test3);

test1.reportPosition();
test2.reportPosition();
test3.reportPosition();

let test = {
  'x':250,
  'y':250,
  'red':255,
  'green':0,
  'blue':0,
  'display': function(){
    fill(this.red, this.green, this.blue);
    ellipse(this.x, this.y, 50, 50);
  },
  'move': function() {
    this.x += 1;

  }
}


/*
let names = {
  "craig":100,
  "pikachu":70,
  "favorite_pokemon": {
  "top":"pikachu",
  "second":"charmander"
},
  "sayHi": function(){
    console.log("hello there!");
    console.log(this.pikachu);
  }
};

console.log(names);
console.log(typeof(names));
console.log(names.craig);
console.log(names['craig']);
console.log(names.favorite_pokemon.second);
names.sayHi();*/
*/



console.log(test1, typeof(test1));
