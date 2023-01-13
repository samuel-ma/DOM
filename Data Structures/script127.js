

"use strict";

/* 
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  
-->  2 + 4 = 6

493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  
-->  2 + 9 = 11  -->  1 + 1 = 2
*/

let n = 16;
// n = 942;

function digitalRoot(n) {
    let splitN = String(n).split("");
    let sum = 0;
    for(let i=0; i<splitN.length; i++){
        sum += Number(splitN[i]);
    }
    
    return sum;
}

console.log(digitalRoot(n));