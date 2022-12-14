//  I'll get back to you.............

"use strict";

let str = "Hey am the shortest word here";

let splitStr = str.split(" ");
// console.log(`The str split is ${splitStr}`);

let x;

for(let i=0; i<splitStr.length; i++){
    let splitValue = splitStr[i].split(" ");
    console.log(splitValue);

    // console.log(splitStr[i].length);
    for(let j=0; j<splitValue.length; j++){
        x = Math.min(splitValue[j].length);
    }
}

console.log(`The min word is ${x}`)