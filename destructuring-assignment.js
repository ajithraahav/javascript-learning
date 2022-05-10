//exmaple -1
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;          //old method
var z = voxel.z;

const { x: a, y: b, z: c } = voxel;    //destructuring assignment 


const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
}

function getTempOfTmrw(avgTemperatures){
    "use strict"
    const {tomorrow:tempOfTomorrow} = avgTemperatures;
    return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

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

// use destructuring assignment to assign variables from arrays

const [p,q,,r] = [1,2,3,4,5];

console.log(p,q,r);

let i = 8, j=6;

(()=>{
    "use strict";
    [i,j] = [j, i];
})();
console.log(i);
console.log(j);

// use destructuring assignment with the rest operator  

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list){
    const [ , , ...arr] = list;
    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);