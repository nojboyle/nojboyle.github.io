/* js_diceGame.js */

function rollIt() {

    // rolling each die randomelly 

    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;

    // sum of rolling 2 dice
    var total = die1 + die2;

    // accessing the first form element
    document.forms[0].elements[0].value = die1;

   // accessing the 1st form element using the forms[] and elements[] DOM's arrays
    document.forms[0].elements[1].value= die2;

    // accessing the 3rd form element using the forms[] and elements[] DOM's arrays
    document.forms[0].elements[2].value = total;
        
     // change the 4th image src loaded in the document using the images[]
     document.images[3].src="dice_" + die1+ ".gif";

    // change the 5th image src loaded in the document using the images[]
     document.images[4].src="dice_" + die2 + ".gif";
 }

