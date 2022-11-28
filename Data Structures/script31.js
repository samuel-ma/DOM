"use strict";

//repeat a string without using the built-in repeat method

function repeat(str, num) {
    let result = "";

    for (let i = 0; i < num; i++) {
        if(num < 0){
            result = ""; 
        } else {
        result += str;
        }
    }

    return result;
}

console.log(repeat("a", 3));


