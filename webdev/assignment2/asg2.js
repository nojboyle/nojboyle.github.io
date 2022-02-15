function change()
{
	let obj1 = document.getElementById("h2");

	obj1.style.fontSize="30px";
	obj1.style.color="pink";
	obj1.style.textAlign="center";
	obj1.style.fontFamily="verdana";
	obj1.textContent="Assignment #2 has been added!";

	let obj2 = document.getElementById("div3");

	obj2.style.background="#FFFFFF";
	obj2.style.color="pink";
	obj2.style.padding="40px";

	let obj3 = document.getElementById("foot");
	obj3.style.background="#FFFFFF";
	obj3.style.color="pink";
	obj3.style.padding="40px";

	let obj4 = document.getElementById("div2");
	obj4.style.fontSize="20px";
	obj4.style.color="pink";
	obj4.style.textAlign="center";
	obj4.style.fontFamily="verdana";

	let obj5 = document.getElementById("div1");
	obj5.style.fontSize="30px";
	obj5.style.color="pink";
	obj5.style.textAlign="center";
	obj5.style.fontFamily="verdana";

}

function randPrize()
{
	let prizes = new Array("Lana Del Rey Concert Ticket", "Britney Spears Concert Ticket", "Beyonce Concert Ticket", "Florence And The Machine Concert Ticket", "MARINA Concert Ticket");

	let prizesimages = new Array("lanaticket.jpg", "britneyticket.jpg", "beyonceticket.jpg", "florenceticket.jpg", "marinaticket.jpg");

	let randomindex = Math.floor(Math.random() * prizes.length);

	let win = document.getElementById('winningprize');

	win.innerHTML = "Congratulations! You won a " + prizes[randomindex] + "<br>" + "<img class='fortuneimages' style='height:350px; width:850px;' src=" + prizesimages[randomindex] + ">";

}

function swaptext()

{
	let swap1 = document.getElementById('pp1');
	let txt1 = swap1.textContent;

	let swap2 = document.getElementById('pp2');
	let txt2 = swap2.textContent;

	swap1.textContent = txt2;
	swap2.textContent = txt1;
}

function swapimg()

{
	let swapimg1 = document.getElementById('img1');
	let pic1 = swapimg1.src

	let swapimg2 = document.getElementById('img2');
	let pic2 = swapimg2.src

	swapimg1.src = pic2;
	swapimg2.src = pic1;
}