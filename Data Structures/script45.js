"use strict";

/*
    accum("abcd") -> "A-Bb-Ccc-Dddd"
    accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
    accum("cwAt") -> "C-Ww-Aaa-Tttt"
*/

let str = "abcd"

let splitByMinus = str.split("").join("-");
console.log(splitByMinus);
console.log(`----------------------------`);

let capStr = str.toUpperCase();
console.log(capStr);
console.log(`----------------------------`);

let final;
let finalI;
let capitalI;
let finalArr = [];
let arrI = [];

let joinedArr;
let sliced;
let capital2;

for(let i=0; i<str.length; i++){
    let indOfItems = str.indexOf(str[i]);

    final = str[i].repeat((indOfItems + 1));
    finalArr.push(final);

    finalI = finalArr[i].toString().split(" ").join("-");
    console.log(`Final i = ${finalI}`);
    sliced = console.log(`Sliced i = ${finalI.slice(0,1)}`);
    capital2 = console.log(`Capital i = ${finalI[0].toUpperCase()}`);

    joinedArr = finalI.concat(sliced);
    console.log(joinedArr);

}

console.log(finalArr);
console.log(`----------------------------`);










