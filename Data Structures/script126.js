

"use strict";

/* 
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
*/

let arr = [1, 1, 1, 2, 1, 1];
// arr = [1,0,0];

let newArr = [];
let uniq = [];
let final;

for(let i=0; i<arr.length; i++){
     if(arr[0] === arr[i]){
        newArr.push(arr[i]);
     } else if(arr[0] !== arr[i]){
        uniq.push(arr[i]);
     }
}

if(newArr.length === 1){
    final = newArr[0];
}

if(uniq.length === 1){
    final = uniq[0];
}

console.log(`The newArr = ${newArr}`);
console.log(`The uniqArr = ${uniq}`);
console.log(`The final unique number = ${final}`);