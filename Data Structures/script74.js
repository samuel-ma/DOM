"use strict";

/*
    ('8aaaaa dddd r     ') ----> ('8aaaaaddddr')
*/

let str = '8aaaaa dddd r     ';
str = "8 j 8   mBliB8g  imjB8B8  jl  B"

let splitStr = str.split("");
console.log(splitStr);

let newArr = [];

for(let i=0; i<splitStr.length; i++){

    if(splitStr[i] !== " "){
        newArr.push(splitStr[i]);
    }
}

console.log(newArr.join(""));