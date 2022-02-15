
//access the first form object

let obj= document.forms[0];


// add an eventlistener (submit event) to the form object (collecting all of the names and values for all form elements)
obj.addEventListener("submit", function(e)
{
// to stop form from submitting to new page (stays anchored on the same page so you can see the output)
	 e.preventDefault();


// get how many elements in the form
let len = obj.elements.length;

let text =  "<hr><h1> Thanks for your purchase today and here is your Receipt: </h1>";


// iterate through all of the form elements making sure there is a value entered for each element and validate zip code, and email

for (let i=0; i < len -2; i++)
{

if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
{

	alert("Make sure to input " + obj.elements[i].name);

	// bring focus the element that has no value
	obj.elements[i].focus();

	// selects the element that has no value
	obj.elements[i].select();

	// highlights the background with red so it brings attention to the element that's empty and requires the user to enter a value
	obj.elements[i].style.backgroundColor="red";

	// return so nothing would be done as user needs to enter the missing value
	return;
}

// if there is a value, and this is the 3rd element (zip code) then make sure it's has 5 digits (validating the zip code)
else if ((i == 2 ) && (obj.elements[i].value.length != 5)  )
{

	alert("Make sure to input 5 digits for " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	return;
}


// if there is a value, and this is the 4th element (email) then make sure it's has an '@' the email (validating the email)
else if ((i == 3 ) && (obj.elements[i].value.indexOf("@") == -1))
{

	alert("Your email should include the '@' for this " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	return;
}

// if there is a value, and this is the 4th element (email) then make sure it's has a '.'' in the email (validating the email)

else if ((i == 3 ) &&  (obj.elements[i].value.indexOf(".") == -1))
{

	alert("Your email should include the '.' for this " + obj.elements[i].name);
	obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="red";
	return;
}

else 
{

text += obj.elements[i].name;
text += ":";
text += obj.elements[i].value;

text += "<p>";
}

}

// open an new document and place the output (receipt inside this new document)
document.open();
document.write(text);
console.log(text);

});
