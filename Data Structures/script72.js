"use strict";

/*
    In this simple assignment you are given a number
    and have to make it negative. 
    But maybe the number is already negative?

    Examples

    makeNegative(1);    // return -1
    makeNegative(-5);   // return -5
    makeNegative(0);    // return 0
    makeNegative(0.12); // return -0.1
*/

let n = -0.12;
let num = 0.12;
let negNum;

if(n === 0){
    console.log(0);
} else if(n < 0){
    console.log(n);
} else if(n > 0){
    negNum = n * -1;
    console.log(negNum);
}


const makeNegative = (num) => {
    return ( num > 0 ) ? -num : num;
}

console.log(makeNegative(num));
