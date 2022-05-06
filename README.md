# Javascript - learning #

## Comments ##

* //singel line comment
* /* comment */ multi line comment 

## Datatypes & Variables

### Datatypes ###

* undefined   - The variable which we not define is called undefined.
* null        - The null is nothing.
* boolean     - The boolean is or false
* string      - The string is a text
* symbol      - It is immutable primitive value that is unique 
* number      - It is number 
* obejct      - It stores a difernet key value pairs.

```javascript
var name = "ajith";
name = 3 ;
let ourName = "javascript";
const pi = 3.14;
```
* var - It is to used to the whole program.
* let - It is only used inside the scope where we decalre it 
* const - It is variable that will be never changed 

### Storing values with Assignment Operator ###

```javascript 
var a;         // declaring variable
var b = 2;     // declaring and assigning variable
console.log(a);  // output - undefined 
a = 7;
b = a;
console.log(a);  // output - 7
```
### Escaping Literal Quotes in Strings ###

```javascript 
var a = "I am a\"double quoted \" string inside \" double quotes\"";
//output a - I am a"double quoted " string inside " double quotes"

var b = "I am a"double quoted " string inside " double quotes" ";
//output b - Uncaught SyntaxError: Unexpected identifier
```
* In the variable b it give the syntax  errror because when it sees the 1st quotes it think it is the end of the string so it gives the error.
* In the variable a we use escape character "\" after that the quote will no longer end of the string.

### Escape sequence in a string ###

* \' - Single quotes
* \" - Double quotes
* \\ - backslash
* \n - newline 
* \r - carriage return
* \t - tab
* \b - backspace
* \f - form feed

### Concatination the strings ###

```javascript
var str = "I am first line" + " I am second line";  // Concatinating string using plus operator 

var str = "I am first line";
str += "I am second line";    // Concatinating string using plus equal operator

var secondline = "I am second line";
var str = "I am first line" + secondline ;  // Concatinating string using variables.

var seconcline = "I am second line";
var firstline = "I am first line";
firstline += secondline;              /// Appending variables to string

```

### Find the length of the strings ###

```javascript
var namelength = 0;
var name = "Ajith";              // Length of a string 
namelength = name.length;        // output - 5

var firstname = "Ajith";         // Bracket notaion to find first character in string 
var firstletter = firstname[0]    // output - "A"

var firstname = "Ajith";          // Find last character in last string 
var lastletter = firstname[firstname.length - 1];  // output - h 

```

### Array ###

```javascript

var array = ["Ajith", 20];   // Normal array

var array = [["Ajith", 20],["Karthi", 21]];  // Nested Array or Multidimensional Array

var array = [10, 20 , 30];
var lastarray = array[2];    // Access the array data
array[1] = 40;               // Modify the array data

var array = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];
var arrdata = arrdata[3][0][1];          // Access multidimensional array 
console.log(arrdata);                    // output - 11         

var array = ["ajith", "karthi", "vijay"]; // Maniplate array with push() - add elements in last
array.push(["kishore","pradeep"]);        // output - [ 'ajith', 'karthi', 'vijay', [ 'kishore', 'pradeep' ] ]

var array = [1, 2, 3];           // Manipulate array with pop()
var popped = array.pop();        // pop() removes the  last element 
console.log(popped);             // output - 3

var array = [1, 2, 3];           // Manipulate array with shift()
var shifted = array.shift();     // shift() removes the  first element 
console.log(shifted);            // output - 1

var array = ["ajith", "karthi", "vijay"];   // Maniplate array with unshift()
array.unshift("kishore");                   // unshift() - add elements first
console.log(array);                         // output - ["kishore", "ajith", "karthi", "vijay"]

```
### Functions ###

```javascript 
// Normal Function
function hello(){
    console.log("hello", "world");
}
hello();     //output - hello world

// Arguments
function args(a,b){
    console.log(a+b);
}
args(3,5);   // output - 8

```
### Scope ###
### Block scope ###
* let and const keyword provide block scope in javascript
* Variables declared inside a { } block cannot be accessed from outside the block.

```javascript
{
  var x = 2;
}
// x CAN be used here

```
### Local scope ###

* They can only be accessed from within the function.

```javascript
function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName
```

### Global scope ###

* A global variable has Global Scope:
* All scripts and functions on a web page can access it. 

### JSON Stringyfy ###

Use the JavaScript function JSON.stringify() to convert it into a string.

```javascript

const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);
//output - {"name":"John","age":30,"city":"New York"}

```
* The result will be a string following the JSON notation.
* myJSON is now a string, and ready to be sent to a server.

### Stand In line ###

We will write a function that is based on a computer science concept called a queue where we add and remove items to and from an array.

The file worked is saved as "functions-standline.js".

### If Statements ###

```javascript
function ourTrueorFlase(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "Yes, it is false";
}
console.log(ourTrueorFlase(false));     // output - "Yes, it is false";

if (val <= 50 && val >= 25)   // this is not a if- statement code it is for && And operator

```

### Difference between AND and OR Operator ###
```javascript

function greater(value) {
  if (val == 10 && value < 100) {
    return "The value is equal to 10 and less than 100";
  }
  return "The one condition is false";   // output 
}
console.log(greater(11));   // In the AND && operator compulsoryly it have to complete two conditions

function greater(value) {
  if (val == 10 || value < 100) {
    return "The value is equal to 10 or less than 100";  // output 
  }
  return "The two condition is false"; 
}
console.log(greater(11));   // In the OR || operator the one condition is ok

```