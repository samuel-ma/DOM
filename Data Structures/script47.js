"use strict";

let str = "abcd";
let final;
let finalI;

for(let i=0; i<str.length; i++){
    finalI = str.indexOf(str[i]);

    final = str[i].repeat(finalI);
    console.log(final);
}