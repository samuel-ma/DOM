"use strict";

/*
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2){
    
    if(operation === "+"){
        return value1 + value2;
    } else if(operation === "-"){
        return value1 - value2;
    } else if(operation === "*"){
        return value1 * value2;
    } else if (operation === "/"){
        return value1 / value2;
    }

}

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));