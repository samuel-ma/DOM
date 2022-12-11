

"use strict";

let num = 9119;

let splitNum = num.toString().split("");
// console.log(splitNum);

let numArr = [];

for(let i=0; i<splitNum.length; i++){
    let x = parseInt(splitNum[i]);
    numArr.push(x);
}
// console.log(numArr);

let newArr = [];

for(let i=0; i<numArr.length; i++){
    let y = numArr[i] ** 2;
    newArr.push(y);
}
// console.log(newArr);

let joinedArr = newArr.join("");
console.log(joinedArr);
console.log(typeof(joinedArr));

let joinNum = parseInt(joinedArr);
console.log(joinNum);
console.log(typeof(joinNum));


