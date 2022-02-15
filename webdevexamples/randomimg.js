// loading random image with every visit

// use the window.onload event to execute the script

let imgArrray = new Array ("myimage.jpg", "nyulogo.png");

window.onload=randomImage()

function randomImage(){
	// access the objct image using the DOM's array object


	let randIndex = Math.floor(Math.random() * imgArray.length);
	let img = document.images[0];

	img1.src = imgArray[randIndex];
}