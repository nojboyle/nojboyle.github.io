function fortunearrival()
{
	let fortune = new Array("The greatest love is self-love.", "Now is the time to try something new.", "Meeting adversity well is the source of your strength.", "You are very talented in many ways.", "You will conquer obstacles to achieve success.");

	let imagesfortunes = new Array("selflove.jpg", "somethingnew.jpg", "strength.jpg", "talented.jpg", "success.jpg");

	let randomindex = Math.floor(Math.random() * fortune.length);

	let fortuneresult = document.getElementById('gottenfortune');

	fortuneresult.innerHTML = "Your fortune is: <br>" + fortune[randomindex] + "<img class='nyulogo' style='height:600px; width:1000px;' src=" + imagesfortunes[randomindex] + ">";

}