function setup() {
  createCanvas(500, 500);
  foo("craig");
}

function draw() {

}

foo("pikachu");

function foo(x) {
  console.log("foo was called");
  console.log("Arg that was sent is", x);
}



let a = function() {
  console.log("a was called");
}

let b = function(x) {
  console.log("b was called");
  x();
}

b(a);
