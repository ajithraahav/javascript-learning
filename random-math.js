function randomFraction(ourMin,ourMax){
    return Math.floor(Math.random()* (ourMax - ourMin + 1)) + ourMin;
}

var a = randomFraction(5,15);
console.log(a); //0.24522840312905458
