function crapGame()
{
	let dice1 = Math.floor(Math.random() * 6) + 1;
	let dice2 = Math.floor(Math.random() * 6) + 1;

	let dicesum = dice1 + dice2;

	let bet = document.forms[0].elements[0].value * 1;

	if (document.forms[0].elements[0].value == null)
	{
		alert("Please input a bet amount!");
		return false;
	}

	let betadjust = bet * dicesum;
	 
    document.forms[0].elements[1].value = dice1;

   
    document.forms[0].elements[2].value= dice2;

    
    document.forms[0].elements[3].value = dicesum;
        
   
    document.images[4].src="dice_" + dice1+ ".gif";

   
    document.images[5].src="dice_" + dice2+ ".gif";

     if (document.forms[0].elements[3].value == 7 || document.forms[0].elements[3].value == 11)
     {
     	let win = document.getElementById("result")

     	win.innerHTML = "Result: You won! The dice total was " + dicesum  +", and you bet $" + bet +", so your total winnings is $" +betadjust+"!";
     }
     else if (document.forms[0].elements[3].value == 2 || document.forms[0].elements[3].value == 3 || document.forms[0].elements[3].value == 12)
     {
     	let lose =document.getElementById("result")

     	lose.innerHTML = "Result: Aw, you lose! The dice total was " + dicesum +", and you bet $"+bet+", so you are now $"+betadjust+" in debt!";
     }
     else
     {
     	let neutral = document.getElementById("result")
     	neutral.innerHTML = "Result: You neither won nor lose, try again!";
     }
}
