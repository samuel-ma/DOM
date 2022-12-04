"use strict";

//my solution 2 

let strUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] 
let strLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

let str = "anyUpperCaseWords";

let strToArray = str.split("");
console.log(strToArray);

function spaceCamelCase(params, params2){
    let final = [];
    
    for(let i=0; i<params.length; i++){
        for(let j=0; j<params2.length; i++){
                if(params[i] === params2[j]){
                final.push(params[i]);
            }
        }
    }
    console.log(final);
    return final;
}

console.log(spaceCamelCase(str, strUpper));