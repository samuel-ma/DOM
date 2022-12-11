

"use strict";

//find the square root of a number
const isSquare = (n) => {
    if (Math.sqrt(n) !== Math.ceil(Math.sqrt(n))){
        return false
    } else {
        return true
    }
}

console.log(isSquare(2));
console.log(isSquare(4));
console.log(isSquare(6));
console.log(isSquare(-4));
console.log(isSquare(16));
console.log(`-----------------`)


const sqaureRt = (num) => {
    let final = Math.ceil(Math.sqrt(num));
    return final;
}

console.log(sqaureRt(1));
console.log(sqaureRt(4));
console.log(sqaureRt(11));
console.log(sqaureRt(25));
console.log(sqaureRt(-25));