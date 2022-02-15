// variable for our sound
let music;

function preload () {
  music = loadSound('sounds/pokemon_theme.mp3');
}

function setup(){
  createCanvas(500,500);
  background(128);
}

// <a href="index.html">click here to reload</a>

function draw() {

}

function keyPressed(){
  if (music.isPlaying() == false && key == 'A'){
    music.play();
  }
  if (music.isPlaying() == true && key == 'S'){
    music.stop();
  }
}
