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
    if (isItTrue) 
      return "Yes, it's true";
    if(isTfalse)
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
### Build Objects ###

* It is a common practice to declare objects with the const keyword.

```javascript 

const bike = {"name":"honda", "color":"white", "gear": 4, "speed":100};

bike.name = "bajaj";          //updating object values
bike.petroltank = "12l";      //adding object values
delete bike.speed;            //delete object property and values

console.log(.bike.name);      //accessing object using dot notation        //output - hond a
console.log(bike["color"]);   //accessing object using bracket notation    //output - white 
console.log(.bike.gear);      //output - 4 
console.log(.bike.speed);     //output - 100

```
### Object Lookups ###
```javascript
function phoneticLookup(val) {
  var result = 0;

  var lookup = {
    Ajith: 1,
    Kathi: 2,
    Vijay: 3,
    Pradeep: 4,
    Kishore: 5,
  };
  result = lookup[val];    // the bracket notation only works on it , dot notation return undeifined
  return result;
}
console.log(phoneticLookup("Ajith"));

```
### Testing Objet for Properties ###

```javascript 

var comp = { 
    "dell": 10,
    "hp":3,
    "lenovo": 20,
    "sony": 4,
 };
 
 function checkComputer(checkComp){  
   if (comp.hasOwnProperty(checkComp)){   
     //hasOwnProperty  The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property
     return comp[checkComp];
   }
   else{
     return "Not found";
   }
 }

 console.log(checkComputer("hp"));   //output 3

```
### Accessing Nested Object ###

```javascript
var myStorage = {
    "car":{
        "inside":{
            "glovebox": "maps",
            "passenger seat": "crumbs",
        },
        "outside":{
            "trunk":"jack",
        }
    }
};

var gloveboxContent = myStorage.car.inside["glovebox"];  // output maps

console.log(gloveboxContent);

```

### Accessing Nested Array ###

```javascript

var myPlants = [ 
    {
        type: "flower",
        lsit: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

var secondTree = myPlants[1].list[1]; 

console.log(secondTree);   // output - pine

```

### while loop ###

```javascript

var arr = [];

var i = 0;

while(i < 5){
   arr.push(i);
   i++;
}
console.log(arr);        //output - [0,1,2,3,4,5]

```

### for loop ###

```javascript

var arr = [];

for (i=0; i < 6; i++){
  arr.push(i);
}
console.log(arr);        //output - [0,1,2,3,4,5]

```

### even num ###
```javascript

var arr = [];

for(i=0; i < 10; i += 2){
     arr.push(i);
}

console.log(arr);

```
### odd num ###
```javascript

var arr = [];

for(i=1; i < 10; i += 2){
     arr.push(i);
}

console.log(arr);

```
### counting backward ###

```javascript

var arr = [];

for(i=10; i > 0; i-=2){
     arr.push(i);
}

console.log(arr);

```

### Iterate Through an array with a for loop ###

```javascript

var arr = [1,2,3,4,5];
var total = 0;

for(i=0; i < arr.length; i++){
   total = total + arr[i];
}

console.log(total);  // ouptut - 15

```

### do while loop ###

```javascript
var arr = [];
var i =10;

do{
    arr.push(i);
    i++;
}while(i < 5)

console.log(i, arr);
```
### random in math ###

* Math.random - gives random values betweeen  0 and 1
* Math.floor - gives nearest value of the random value

```javascript

function randomFraction(){
    return Math.random();         //0.24522840312905458
    return Math.floor(Math.random()*10);   //ouput  - 8 for return nearest whole numbers 
    return Math.floor(Math.random()* (ourMax - ourMin + 1)) + ourMin;   // 15 - give answer between 5 to 15 the range
}

console.log(randomFraction(5,15)); 


```

### parseInt functions ###

*parsrInt - the functions convert he string into numbers  

```javascript

function numericString(str){
    return parseInt(str);
}
var a = numericString("56") + 1;

console.log(a);      //output - 57

```
* to give binary number pass 2 as base 2.the default value is base 10

```javascript

function numericString(str){
    return parseInt(str,2);
}

console.log("10011");   //to give binary number pass 2 as base 2.the default value is base 10
 ```

 ### terenary operator ###

* In the below program "a==b" is the condition it is like if condtion if it is true it give tre otherwise it give fales.

 ```javascript 
 function value(a,b){
        return a==b ? true : false;
}

console.log(value(1,2));  // false
```
* it uses multiple condition in terenary operator

```javascript
function checkNum(num){
    return num > 0 ? "positive" : num < 0 ? "negative": "zero"
}

console.log(checkNum(10));

```
### difference between var let ###

```javascript 
var a = "ab";
var a = "ba";
console.log(a);   // it gives the last assigned value


let a = "ab";
let a = "ba";
console.log(a);   // but when we use let it gives duplication error
```
* var - has the global scope or local scope
* let - has the block scope or a expression

### const ###

* it also have the all the features of the let
* It read only cannot ressign a value 
* If we ressgin it we get the error read only
* try to use const in capitl letters
 
* MUTATE ARRAY DECALRE WITH CONST

```javascript
const s = [3,2,1];
function exitConst(){
  "use strict"
  s = [1,2,3,]; // it gives error "s" is read only 
  s[0]= 1;
  s[1]= 2;
  s[2]= 3;  //output - [1,2,3]
} 
```
### prevent object mutaion ###

* when dont want to change object value use object.freeze.


```javascript
function freezeObj(){
    "use strict";
    const MATH_CONSTANT = { PI:3.1 };

    Object.freeze(MATH_CONSTANT);

    try{
        MATH_CONSTANT.PI = 99;
    }
    catch(ex){
        console.log(ex);
    }
    return MATH_CONSTANT.PI;
}

const PI = freezeObj(); 

console.log(PI);
```

### Arrow functions ###
* whenever you have an anonymous function convert it to an arrow funcitons 

```javascript

var magic = function(){
  return new Date();
};                     //it is anonymous functions

-----------------------------------------

const magi = () = > new Date();     //converted to arrow function 

```
* arrow function with parameters

```javascript

var myConcat = function(arr1,arr2){
  return arr1.concat(arr2);                         //it is anonymous functions
}

console.log(myConcat([1,2],[3,4,5]));      //output - [1,2,3,4,5]

------------------------------

var myConcat = (arr1,arr2) => arr1.concat(arr2);   //converted to arrow function
console.log(myConcat([1,2],[3,4,5]));       //output - [1,2,3,4,5]

```


### map ###
* creates a new array from calling a function for every array element.
* calls a function once for each element in an array.
* does not execute the function for empty elements.
* does not change the original array.

```javascript
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;                   
}
console.log(newArr);         //output - [650, 440, 120, 40]

```

### filter ###

* The filter() method creates a new array filled with elements that pass a test provided by a function.
* The filter() method does not execute the function for empty elements.
* The filter() method does not change the original array.

```javascript

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
```
### rest operator and reduce ###
* When the spread operator is used as a parameter, it is known as the rest parameter.
* You can also accept multiple arguments in a function call using the rest parameter.
* The rest parameter must be the last parameter in the function definition.
* The rest parameter syntax allows a function to accept an indefinite number of arguments as an array

```javascript

const sum = (function(){
    return function sum(...args){        // the rest oeprator is used to convert all the arguments to array
        return args.reduce((a,b)=>a*b,0)   //The reduce() method returns a single value: the function's accumulated result.
    };
})();
console.log(sum(1,2,3));

```
### spread operator ###

* The spread operator ... is used to expand or spread an iterable or an array. 

*  In the below code arr2 gives duplicated array value because the value assigned using spread it takes copy of array it dipslay the copy.so, it doesn't modified
* The arr1 gives the modified value because the array is assigned normally

```javascript

const arr1 = ["jan", "feb", "mar", "april", "may"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr2 = arr1;

  arr1[0] = "potato";
})();
console.log(arr2);       //[ 'jan', 'feb', 'mar', 'april', 'may' ]
console.log(arr1);       //[ 'potato', 'feb', 'mar', 'april', 'may' ]   

```

### destrcuturing assignment ###

```javascript

var voxel = { x: 3.6, y: 7.4, z: 6.54 };

//old method
var x = voxel.x;        //x=3.6
var y = voxel.y;        //y=7.4 
var z = voxel.z;        //z=6.54

const { x: a, y: b, z: c } = voxel;   // a = 3.6, b = 7.4, z = 6.54  destrcuturing assignment method

```

```javascript
//nested destructuring assignment
const LOCAL_FORECAST = {
    today:{min: 72, max: 83},
    tomorrow:{min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forecast){
    "use strict";

    const {tomorrow : {max: maxOfTomorrow}} = forecast;

    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));

```
```javascript
// use destructuring assignment to assign variables from arrays

const [p,q,,r] = [1,2,3,4,5];   //extra comma is used to go to next value

console.log(p,q,r);           // output - 1,2,4

------------------------------------------
let i = 8, j=6;

(()=>{
    "use strict";
    [i,j] = [j, i];
})();
console.log(i);             //output - 6
console.log(j);             //output - 8

```