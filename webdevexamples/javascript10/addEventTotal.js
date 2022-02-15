// Demo onchange event to display value from select input

function select()
{

var x = document.getElementById('movie').value;

alert("You selected : " + x);

document.getElementById('result').value = "You have selected: " + x;



}

// demo onchange with an input field to compute total
function total()

{

   var items = document.getElementById('iphone').value;
   var price = document.getElementById('price').value;

   var stotal = items * price;

   document.getElementById("subtotal").value= stotal;

}