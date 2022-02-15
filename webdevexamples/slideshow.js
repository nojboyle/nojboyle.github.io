// to start the slideshow

let imgArrray = new Array ("myimage.jpg", "nyulogo.png");
let index = 0;

let imgObj = document.images[0];

const flag;
function start()
{

	if (index >= imgArray.length)
	{
		index = 0;
	}

	imgObj.src = imgArray[index];

	index +=1;

	flag = setTimeout(start, 500);

}

function stop()
{
	clearTimeout(flag);
}