"use strict";

let arr = ['hello', 'world', 'this', 'is', 'great'];

console.log(arr.join(" "));


function countSheep(num){
    //your code here
    let newArr = [];
    
    for(let i=1; i<=num; i++){
      if(num === 0){
        newArr = '';
      } else {
        newArr.push(`${i} sheep...`);
      }
    }
    
    return newArr.join("");
}

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));




