

"use strict";

/* 
isPP(4), [2,2], "4 = 2^2";
isPP(9), [3,2], "9 = 3^2";
isPP(5), null, "5 isn't a perfect number";
*/

let n = 4;
n = 9;
// n = 16;

let newArr = [];
let p;

for(let i=1; i<=n; i++){
    if((i*i) === n){
        newArr.push(i);
    } else if((i*i) !== n){
        p = (`${n} is not a perfect number`);
    }
}

console.log(newArr);
console.log(p);
