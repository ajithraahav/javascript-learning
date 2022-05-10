// var arr =  [1,2,3,4,5,5,56,7,7,5,8,9]

// var ar = [];

// for (i= 0; i < arr.length; i++){
//     if(ar==i){
//         ar.push();
//     }
// }
// console.log(ar);

// // arr.forEach((values)=>{
// //     if(!ar.includes(values)){
// //         ar.push(values)
// //     }
// // })
// a = [1, 2, 3, 4, 5, 1, 2, 3];
// b = [];
// label1: for (let i = 0; i < a.length; i++) {
//   for (let j = 0; j < i; j++) {
//     if (b[j] == a[i]) continue label1;
//   }
//   b.push(a[i]);
// }
// console.log(b);
// let a = "ab";
// let b = "bbbbbb";

//  a = "ba";

//  function varr(){
//   //  "use strict"
//   a = "aaaa ";
//   b = a + "cccccc";

//  }
// console.log(varr());

// const s = [3,2,1];
// function exitConst(){
//   "use strict"
//   s = [1,2,3,]; // it gives error "s" is read only 
//   s[0]= 1;
//   s[1]= 2;
//   s[2]= 3;  //output - [1,2,3]
// } 

// var myConcat = function(arr1,arr2){
//   return arr1.concat(arr2);
// }

// console.log(myConcat([1,2],[3,4,5]));

var myConcat = (arr1,arr2) => arr1.concat(arr2);
console.log(myConcat([1,2],[3,4,5]));

