// changing styles

function change() {
	
	document.body.style.backgroundColor= "#FF0000";

	document.body.style.color="FFF";

	//access the object div with id=div1

	let objDiv1 = document.getElementById('div1');

	objDiv1.style.width="600px";

	objDiv1.style.backgroundColor="yellow";
	objDiv1.style.backgroundColor="silver";
	objDiv1.style.border="dotted yellow 10px";
	objDiv1.style.fontSize="20px";

	objDiv1.textcontent="Hello class";

	objDiv1.innerHTML="<h1>Hi students</h1>";
}

