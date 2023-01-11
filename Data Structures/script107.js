

"use strict";

/*
moveZeros([false,1,0,1,2,0,1,3,"a"]) 
returns[false,1,1,2,1,3,"a",0,0]
*/

let arr = [false,1,0,1,2,0,1,3,"a"];

const rItem = arr.splice(arr.length-1,1);
console.log(`The removed item = ${rItem}`);
console.log(`The newArr = ${arr}`);

for(let i=0; i<arr.length; i++){
    if(arr[i] === 0){
        arr.push(arr.splice(arr[i], 1));
    }
}

console.log(`The newArr = ${arr}`);

console.log(`The oldArr = ${arr}`);
arr.push(12);
console.log(`The newArr = ${arr}`);

let strArr = arr.join(" ").split(" ");
console.log(`strArr = ${strArr}`);

for(let i=0; i<strArr.length; i++){
    if(strArr[i] === "0"){
        strArr.splice(strArr[i], 1);
    }
}

console.log(`The newArr = ${strArr}`);




