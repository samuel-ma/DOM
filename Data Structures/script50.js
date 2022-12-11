

"use strict";

let myStr = ("1 2 3 4 5");
let splitStr = myStr.split(" ");
console.log(splitStr);

let numStr;
let newArr = [];

for(let i=0; i<splitStr.length; i++){
    numStr = parseInt(splitStr[i]);
    newArr.push(numStr);
}
console.log(newArr);

let high = Math.max(newArr);
console.log(high);

let low = Math.min(newArr);
console.log(low);






function highAndLow(str){

    let high = Math.max(str);
    console.log(high);

    let low = Math.min(str);
    console.log(low);

    return console.log(`[${high} ${low}]`);
}

// highAndLow(newArr);

