

"use strict";

let str = "zzoo";

//Check to see if a string has the same amount of 'x's and 'o's
let splitStr = str.split("");
console.log(`The split string = ${splitStr}`);

let capArr = [];

for(let i=0; i<splitStr.length; i++){
    capArr.push(splitStr[i].toUpperCase());
}

console.log(`The capital Arr = ${capArr}`);

let oArr = [];
let xArr = [];

for(let i=0; i<capArr.length; i++){
    if(capArr[i] === "O"){
        oArr.push(capArr[i])
    } else if(capArr[i] == "X"){
        xArr.push(capArr[i]);
    } else if(capArr[i] !== "X" && capArr[i] !== "O"){
        oArr.push(capArr[i]);
        xArr.push(capArr[i]);
    }
}

console.log(`The oArr = ${oArr}`);
console.log(`The xArr = ${xArr}`);

if(oArr.length === xArr.length){
    console.log(true);
} else {
    console.log(false)
}

