
// functions to load a random image every time you load the page using addEventListener() method


window.addEventListener("load", randimage);



var imagea= ["nyc1.jpeg","nyc2.jpeg", "nyc3.jpeg", "nyc4.jpeg"];

function randimage(){
var size= imagea.length;

var rand = Math.floor(Math.random() * size)
document.images[0].style.height="300px";
document.images[0].style.width="300px";
document.images[0].src= imagea[rand];


// you can also use this: document.getElementById("img1").src= imga[randnum];
//you can also use this: document.img1.src= imga[randnum];

}


