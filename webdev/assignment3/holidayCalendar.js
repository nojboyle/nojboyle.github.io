function holidayCalendar()
{
	const holidate = new Date(document.getElementById("datechecker").value)

	let day = holidate.getUTCDate();
	let month = holidate.getUTCMonth() + 1; 
	let year = holidate.getUTCFullYear();

	let result = document.getElementById("output");
	result.innerHTML = "Output: "+month+"/" + day + "/" + year;

	let holidayImages = new Array("laborday.jpg", "indigenousday.jpg", "halloween.jpg", "thanksgiving.jpg", "fallbreak.jpg", "winterrecess.jpg", "christmas.jpg", "newyearseve.jpg", "newyear.jpg", "mlkjrday.jpg", "notanNYUholiday.jpg", "presidentsday.jpg", "valentinesday.jpg", "springbreak.jpg", "easter.jpg", "memorialday.jpg", "juneteenth.jpg", "independenceday.jpg")

	/*September 6th: Labor Day
	October 11th: Indigenous People’s Day
	October 31st: Halloween
	November 25th-26th: Thanksgiving
	December 23rd - January 2nd: Winter Recess
	January 17th - Martin Luther King Jr. Day
	February 21st: Presidents Day
	March 14th - 20th: Spring Break
	May 30th: Memorial Day
	June 19th - June 20th: Juneteenth
	July 4th: Independence Day*/

	if (month == 9 && day == 6)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Labor Day, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[0];
	}
	else if (month == 10 && day == 11)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Indigenous People's Day, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[1];
	}
	else if (month == 10 && day == 31)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Halloween, but unfortunately it is not considered an NYU Holiday :(";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[2];
	}
	else if (month == 11 && day == 25)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Thanksgiving Day, which is considered an NYU Holiday! This NYU Holiday is a part of Fall Break, which ranges from November 25th - November 26th.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[3];
	}
	else if (month == 11 && day == 26)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is not a Holiday, but is a part of Fall Break, which ranges from November 25th - November 26th.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[4];
	}
	else if (month == 12 && day == 23 || month == 12 && day == 24 || month == 12 && day == 26 || month == 12 && day == 27 || month == 12 && day == 28 || month == 12 && day == 29 || month == 12 && day == 30 || month == 1 && day == 2)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is not a Holiday, but is a part of Winter Recess, which ranges from December 23rd - January 2nd.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[5];
	}
	else if (month == 12 && day == 25)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Christmas Day, which is not considered an NYU Holiday. However, this day is a part of Winter Recess, which ranges from December 23rd - January 2nd.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[6];
	}
	else if (month == 12 && day == 31)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is New Years Eve, which is not considered an NYU Holiday. However, this day is a part of Winter Recess, which ranges from December 23rd - January 2nd.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[7];
	}
	else if (month == 1 && day == 1)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is New Years Day, which is not considered an NYU Holiday. However, this day is a part of Winter Recess, which ranges from December 23rd - January 2nd.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[8];
	}
	else if (month == 1 && day == 17)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Martin Luther King Jr. Day, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[9];
	}
	else if (month == 2 && day == 21)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Presidents Day, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[11];
	}
	else if (month == 2 && day == 14)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Valentine's Day, but unfortunately it is not considered an NYU Holiday :(";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[12];
	}
	else if (month == 3 && day == 14 || month == 3 && day == 15 || month == 3 && day == 16 || month == 3 && day == 17 || month == 3 && day == 18 || month == 3 && day == 19 || month == 3 && day == 20)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is not a Holiday, but is a part of Spring Break, which ranges from March 14th - Marth 20th.";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[13];
	}
	else if (month == 4 && day == 17)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Easter, but unfortunately it is not considered an NYU Holiday :(";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[14];
	}
	else if (month == 5 && day == 30)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Memorial Day, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[15];
	}
	else if (month == 6 && day == 19)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Juneteenth, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[16];
	}
	else if (month == 6 && day == 20)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is not a Holiday, but is an NYU Holiday for observance of Juneteenth!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[16];
	}
	else if (month == 7 && day == 4)
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is Memorial Day, which is considered an NYU Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[17];
	}
	else
	{
		result.innerHTML = "Output: "+month+"/" + day + "/" + year +" is not a Holiday!";
		let holimage = document.getElementById("festive");
		holimage.src= holidayImages[10];
	}
}