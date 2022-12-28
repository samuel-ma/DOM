"use strict";

/* 
    Input: [1,2,3,4,5], output = [2,3,4,5]
    Input: [5,3,2,1,4], output = [5,3,2,4]
    Input: [2,2,1,2,1], output = [2,2,2,1]
*/

let arr = [1,2,3,4,5];
// arr = [5,3,2,1,4];
// arr = [2,2,1,2,1]
// arr = 171

function removeSmallest(arr) {
  
    if(typeof(arr) === "number"){
        return [];
    } else {

        let n = arr.map(i => String(i));
        let newNum = n.join("");
        let final;
        
        final = newNum.replace(/1/i,"").split("");
        return final.map(i => Number(i));
    }
}

console.log(removeSmallest(arr));
console.log(typeof []);



// const numbers = arr.map(i => String(i));
// console.log(numbers);

// let newNum = numbers.join("");
// console.log(newNum);

// console.log(newNum.replace(/1/i,""));
