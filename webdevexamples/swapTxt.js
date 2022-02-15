// swap the texts from 2 elements

function swap()

{
	//access the object id=p1
	let obj1 = document.getElementById('p1');
	// the property of the first object
	//let text1 = obj1.textContent;

	let text1 = obj1.innerHTML;

	console.log("Text1:"+text1)
	//access the object id=p2
	let obj2 = document.getElementById('p2');
	// the propertty of the second object
	//let text2 = obj2.textContent;
	let text2 = obj2.innerHTML;
	console.log("Text2:"+text2)

	obj1.innerHTML = text2;

	obj2.innerHTML = text1;

}