// Funciton for scope
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myglobals: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "oopsglobals: " + oopsGlobal;
  }
  console.log(output);
}
// fun1();
// fun2();

// Function return value

function add(num) {
  return num - 7;
}
console.log(add(10));

// Function return undefined

var sum = 10;
function add1() {
  sum = sum + 3;
}
// console.log(add1());

// Assignment return value

var changed = 0;
function change(num) {
  return (num + 5) / 3;
}
changed = change(10);

console.log(changed);
