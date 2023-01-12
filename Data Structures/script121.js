

"use strict";

/*
positive = +s/n
negative = -s/n
zero = 0/n
*/

let arr = [-4, 3, -9, 0, 4, 1];

let p = [];
let n = [];
let z = [];

for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
        z.push(arr[i]);
    } else if(arr[i] > 0){
        p.push(arr[i]);
    } else if(arr[i] < 0){
        n.push(arr[i]);
    }
}

// console.log(p);
// console.log(n);
// console.log(z);

let positive = (p.length/arr.length);
let negative = (n.length/arr.length);
let zero = (z.length/arr.length);

console.log(`${positive.toFixed(6)}
${negative.toFixed(6)}
${zero.toFixed(6)}`)
