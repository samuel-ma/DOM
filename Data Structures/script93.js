"use strict";

let n = 16;
n = 942;
// n = 132189;
// n = 493193;

let splitN = String(n).split("");
console.log(splitN);

let sum = 0;

if(n.length > 1){
    for(let i=0; i<splitN.length; i++){
        sum += Number(splitN[i]);
    }
} else {
    sum = Number(splitN[0]);
}

console.log(sum);
