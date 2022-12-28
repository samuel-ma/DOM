"use strict";

/*

*/
let arr = [5,2,4,3,1];
arr = 35231;

// console.log(arr.sort(function(a, b){return a-b}));

let revStr = String(arr).split('').reverse();

const mapped = revStr.map(i => Number(i));

console.log(mapped);
