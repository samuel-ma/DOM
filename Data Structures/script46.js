"use strict";

let str = "abcd"
let strCap = str[0].toUpperCase();
let slicedStr = str.slice(0,1,strCap);

//convert the string to an array to access the splice method
let strArr = str.split("");
console.log(strArr);

let capFirst;

for(let i=0; i<strArr.length; i++){
    capFirst = strArr[0].toUpperCase();
    strArr.splice(0,1,capFirst);
}

console.log(capFirst);
console.log(strArr);

// console.log(str);
// console.log(strCap);
// console.log(slicedStr);
