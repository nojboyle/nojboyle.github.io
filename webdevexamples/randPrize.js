

function prize()
{
	//let prizeArray =  new Array("Mini", "BMW", "Volvo")
	let prizeArray = new Array("BMW", "MINI", "Volvo");

	let prizeImgArray = new Array("nyulogo.png", "myimage.jpg", "myimage.jpg");

	let randIndex = Math.floor(Math.random() * prizeArray.length);

	let obj = document.getElementById('result');

	obj.innerHTML = "Congrats- you won" + prizeArray[randIndex] + "<img src=" + prizeImgArray[randIndex] + ">";

}