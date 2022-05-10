const realNum =[1,2,34,245,242,-45,-4,-23,];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map (x => x * x);
    return squaredIntegers;
}

const squaredIntegers = squareList(realNum);

console.log(squaredIntegers);