

"use strict";

let n = 15;

let newArr = [];

for(let i=1; i<=n; i++){
    if(i%5 === 0 && i%3 === 0){
        newArr.push("FizzBuzz");
    }else if(i%3 === 0){
        newArr.push("Fizz");
    }else if(i%5 === 0){
        newArr.push("Buzz");
    }else if(i%5 !== 0 && i%3 !== 0){
        newArr.push(i);
    }
}
console.log(`${newArr}`);

