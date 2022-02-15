
function display(day)
{
	
	// declaring and setting the special days for the array 
	let days = new Array(100);

	days[9] = "Meeting with Beyonce";
	days[11] = "Indigineous peoples day";
	days[31] = "Halloween";

	document.getElementById("result").value = days[day];
}