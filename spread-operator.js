const arr1 = ["jan", "feb", "mar", "april", "may"];
let arr2;
(function () {
  arr2 = [...arr1];
  arr2 = arr1;

  arr1[0] = "potato";
})();
console.log(arr2);
console.log(arr1);
