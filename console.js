obj = { name: "ajith", age: 21 };
console.log("Out");
console.group();
console.log("top of the group");
console.dir(obj);
console.log(obj);
console.log("Hi %d there", 1);
console.log("Hi this is %c red", "color: red;");
console.table(["ajith", 21, "Trichy"]);
console.groupEnd();

console.log("outside the group");

function numbers() {
  console.count();
}

numbers();
numbers();
numbers();
numbers();
numbers();
console.countReset();
numbers();

function howmany() {
  for (let i = 0; i < 1000000; i++);
}
console.time("howmany");
howmany();
console.timeEnd("howmany");
