"use strict";

function solution(number){

    let sum = 0;
  
    for(let i=1; i<number; i++){
        if(i%3 === 0 && i%5 === 0){
            sum += i;
            console.log(i);
        } 
    }
  
    return sum;
}

// console.log(solution(2));
// console.log(solution(9));
// console.log(solution(10));
// console.log(solution(33));
// console.log(solution(17));

let number = 10;
let sum = 0;
let sum2 = 0;
let sum3 = 0;
let final;

for(let i=1; i<number; i++){
    if(i%3 === 0){
        sum += i
    } else if (i%5 === 0){
        sum2 += i
    }
}

final = sum + sum2;

// console.log(sum)
// console.log(sum2)
// console.log(final)


for(let j=1; j<number; j++){
    if(j%3 === 0 || j%5 === 0){
        sum3 += j
    } 
}
console.log(sum3)