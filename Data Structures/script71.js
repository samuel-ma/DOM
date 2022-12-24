"use strict";

/*
    divisors(12); // should return [2,3,4,6]
    divisors(25); // should return [5]
    divisors(13); // should return "13 is prime"
*/

let n = 15;

function divisors(n){

    let newArr = [];
    
    for (let i=1; i<=n; i++){

        if(n%i === 0){
            newArr.push(i);
        }
    }

    newArr.shift();
    newArr.pop();

    if(newArr.length === 0){
        return `${n} is prime`;
    } else {
        return newArr;
    }
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));
console.log(divisors(20));


