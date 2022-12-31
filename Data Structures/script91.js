"use strict";

function doubleChar(str) {
    // Your code here
    let final = [];
    
    for(let i=0; i<str.length; i++){
      final.push(str[i].repeat(2));
    }
    
    return final.join("");
}

console.log(doubleChar("hello world"));




