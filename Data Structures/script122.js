

"use strict";

/*
arr = [1,3,5,7,9];

minimum sum = 1 + 3 + 5 + 7
maximum sum = 3 + 5 + 7 + 9

*/

let arr = [1,2,3,4,5];
arr = [1,3,5,7,9];

let max = [];
let min = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] !== arr[0]){
        max.push(arr[i]);
    } 
    if(arr[i] !== arr[arr.length-1]){
        min.push(arr[i])
    }
}

// console.log(max);
// console.log(min);

let sum = 0;
let sum2 = 0;

for(let i=0; i<max.length; i++){
    sum += max[i];
}

console.log(sum);

for(let i=0; i<min.length; i++){
    sum2 += min[i];
}

console.log(sum2);