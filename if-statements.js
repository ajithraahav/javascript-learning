function num (val) {
  if (val < 5) {
    return "tiny";
  } else if (val < 10) {
    return "small";
  } else if (val < 15) {
    return "medium";
  } else if (val < 20) {
    return "large";
  } else if (val >= 20) {
    return "huge";
  }
}

console.log(num(14));
