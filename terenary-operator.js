function value(a,b){
        return a==b ? true : false;
}

// console.log(value(1,2));

function checkNum(num){
    return num > 0 ? "positive" : num < 0 ? "negative": "zero"
}

console.log(checkNum(0));