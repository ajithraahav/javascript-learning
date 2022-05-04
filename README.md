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

var array = ["ajith", "karthi", "vijay"]; // Maniplate array with push()
array.push(["kishore","pradeep"]);        // output - [ 'ajith', 'karthi', 'vijay', [ 'kishore', 'pradeep' ] ]

var array = [1, 2, 3];           // Manipulate array with pop()
var popped = array.pop();        // pop() removes the  last element 
console.log(popped);             // output - 3

var array = [1, 2, 3];           // Manipulate array with shift()
var shifted = array.shift();     // shift() removes the  first element 
console.log(shifted);            // output - 1

var array = ["ajith", "karthi", "vijay"]; 
array.unshift("kishore");                   // Maniplate array with unshift()
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

//Global Scope



```
