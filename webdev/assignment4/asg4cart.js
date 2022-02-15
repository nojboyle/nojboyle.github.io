let obj1 = document.getElementById("qt1");

let obj2 = document.getElementById("qt2");

let obj3 = document.getElementById("qt3");

let form2obj1 = document.forms[1];

let len = form2obj1.elements.length;

let text =  "<h3>Receipt: </h3><hr>";

let subtotal1 = document.getElementById("subtotal1");

let subtotal2 = document.getElementById("subtotal2");

let subtotal3 = document.getElementById("subtotal3");

let subt1;

let subt2;

let subt3;

let grandtotal;

let grandtotal2;

let ship1 = document.getElementById("ship1");
let ship2 = document.getElementById("ship2");

window.onload=function(){

obj1.addEventListener("change", total);

obj2.addEventListener("change", total);

obj3.addEventListener("change", total); 

ship1.addEventListener("change", total);

ship2.addEventListener("change", total); 

form2obj1.addEventListener("submit", function(e)
{
	 e.preventDefault();
	 receipt();
})
}

function total()
{
	let price1 = 350;
	let price2 = 450;
	let price3 = 275;

	let shipping = 50;

	let qt1 = parseFloat(obj1.value);
	let qt2 = parseFloat(obj2.value);
	let qt3 = parseFloat(obj3.value);

	subtot1 = qt1 * price1;
	subtot2 = qt2 * price2;
	subtot3 = qt3 * price3;

	if (subtot1 > 0 && isNaN(subtot2) && isNaN(subtot3))
	{
		grandtotal = subtot1;
	}
	if (subtot2 > 0 && isNaN(subtot1) && isNaN(subtot3))
	{
		grandtotal = subtot2;
	}
	if (subtot3 > 0 && isNaN(subtot2) && isNaN(subtot1))
	{
		grandtotal = subtot3;
	}
	if (subtot1 > 0 && subtot2 > 0 && isNaN(subtot3))
	{
		grandtotal = subtot1 + subtot2;
	}
	if (subtot1 > 0 && subtot3 > 0 && isNaN(subtot2))
	{
		grandtotal = subtot1 + subtot3;
	}
	if (subtot2 > 0 && subtot3 > 0 && isNaN(subtot1))
	{
		grandtotal = subtot2 + subtot3;
	}
	if (subtot1 > 0 && subtot2 > 0 && subtot3 > 0)
	{
		grandtotal = subtot1 + subtot2 + subtot3;
	}

	if (ship2.checked)
	{
		grandtotal2 = grandtotal += shipping;
		document.forms[0].elements[8].value = grandtotal2;
	}

	document.forms[0].elements[1].value = subtot1;

	document.forms[0].elements[3].value = subtot2;

	document.forms[0].elements[5].value = subtot3;

	document.forms[0].elements[8].value = grandtotal;

}

function receipt()
{
	for (let i=0; i < len -2; i++)
	{

		if ((form2obj1.elements[i].value == "") || (form2obj1.elements[i].value == null))
	{

		alert("Error, please enter the " + form2obj1.elements[i].name);

		form2obj1.elements[i].focus();

		form2obj1.elements[i].select();

		form2obj1.elements[i].style.backgroundColor="red";

		return;
	}
	else if ((i == 2 ) &&  (form2obj1.elements[i].value.indexOf(".") == -1))
	{

	alert("Error, you need to include a '.' for the " + form2obj1.elements[i].name);
	form2obj1.elements[i].focus();
	form2obj1.elements[i].select();
	form2obj1.elements[i].style.backgroundColor="red";
	return;
	}
	else if ((i == 2 ) && (form2obj1.elements[i].value.indexOf("@") == -1))
	{

	alert("Error, you need to include a '@' for the " + obj.elements[i].name);
	form2obj1.elements[i].focus();
	form2obj1.elements[i].select();
	form2obj1.elements[i].style.backgroundColor="red";
	return;
	}
	else if ((i == 4 ) && (form2obj1.elements[i].value.length != 5)  )
	{

	alert("Error, only 5 digits are allowed for the " + form2obj1.elements[i].name);
	form2obj1.elements[i].focus();
	form2obj1.elements[i].select();
	form2obj1.elements[i].style.backgroundColor="red";
	return;
	}
	else 
	{

	if (i == 0)
	{
		text += "<h3>First Name: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 1)
		{
		text += "Last Name: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 2)
	{
		text += "Email: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 3)
	{
		text += "Address: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 4)
	{
		text += "ZIP Code: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 5 && form2obj1.elements[i].checked)
	{
		text += "Credit Card Type: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 6 && form2obj1.elements[i].checked)
	{
		text += "Credit Card Type: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 7 && form2obj1.elements[i].checked)
	{
		text += "Credit Card Type: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}
	if (i == 8)
	{
		text += "Credit Card Number: "

		text += form2obj1.elements[i].value;

		text += "<h3>";
	}

	}
	}
	text += "Total: $"
	text += grandtotal;
	text += "<h3>";
	document.getElementById("receipt").innerHTML= text;
}