

"use strict";

/*
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

let n = 42145;

let str = n.toString();
console.log(str);
console.log(typeof str);

let arr = str.split("");
console.log(arr);

const final = arr.sort(function(a,b){
    return b-a;
});

console.log(final);



//Here's the final function
function descendingOrder(n){
    return Number(n.toString().split("").sort((a,b) => b-a).join(""));
}

console.log(descendingOrder(n));
