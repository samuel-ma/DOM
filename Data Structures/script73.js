"use strict";

//remove the first and last characters
//in a string;

let str = "eloquent";
let splitStr = str.split("");

let removeFirst = splitStr.shift();
console.log(splitStr)

let removeLast = splitStr.pop();
console.log(splitStr);




//Here's the final function
function removeChar(str){
       return str.slice(1,-1);
};

console.log(removeChar(str));


