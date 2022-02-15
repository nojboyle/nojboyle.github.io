// Demo onchange event to display value from select input


let movieObj = document.getElementById("movie");
let iphoneObj = document.getElementById("iphone");
movieObj.addEventListener("change", changeFunc);
iphoneObj.addEventListener("change", total);

function changeFunc()
{

let movie = movieObj.value;

alert("You selected : " + movie);

document.getElementById('result').value = "You have selected: " + movie;



}

// demo onchange with an input field to compute total
function total()

{

   var items = document.getElementById('iphone').value;
   var price = document.getElementById('price').value;

   var stotal = items * price;

   document.getElementById("subtotal").value= stotal;

}