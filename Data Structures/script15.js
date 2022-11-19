"use strict";

/*
    REPEAT A STRING 
    Repeat a give string str(first argument) for num times(second argument).
    Return an empty string if num is not positive number.
    For the purpose of this challenge, do not use the built-in .repeat() method.
*/

/*
repeat a number n times
let myName = "Sam";
let repeatedNumber = myName.repeat(4);
console.log(repeatedNumber);
*/


// using the in-built REPEAT method
function repeatStr(str, num){
    let repeatedNum;
    
    if(num <= 0) {
        repeatedNum = "";
    } else {
        repeatedNum = str.repeat(num);
    }
    return repeatedNum;
}

console.log(repeatStr("abc", 7));

