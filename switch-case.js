function switchCase(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
console.log(switchCase(3));

// Multiple input give the same output

function switchCase1(val1) {
  var answer1 = "";
  switch (val1) {
    case 1:
    case 2:
    case 3:
      answer1 = "low";
      break;
    case 4:
    case 5:
    case 6:
      answer1 = "medium";
      break;
    case 7:
    case 8:
    case 9:
      answer1 = "high";
      break;
  }
  return answer1;
}
console.log(switchCase1(6));
