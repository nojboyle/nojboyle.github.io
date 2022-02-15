// demo change event to compute total 


var obj= document.getElementById("qt");

obj.addEventListener("change", subtotal);


function subtotal()
{

var price = document.getElementById("price").value;


var qt1 = parseFloat(obj.value);


total= qt1 * parseFloat(price);

document.getElementById("result").innerHTML= "The subtotal is " + total;
console.log("total is " + total)
}
