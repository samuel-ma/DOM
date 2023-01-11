

"use strict";

let str = "bitcoin take over the world maybe who knows perhaps" 
//returns 3

let arr = str.split(" ");
console.log(`The arr = ${arr}`);

let newArr = [];

for(let i=0; i<arr.length; i++){
    newArr.push(arr[i].length);
}

console.log(newArr);

console.log(Math.min(...newArr));