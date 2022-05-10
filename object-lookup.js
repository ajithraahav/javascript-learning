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
