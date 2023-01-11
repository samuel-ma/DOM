

"use strict";

/*
You get an array of numbers, return the sum of all of 
the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default 
to 0.
*/


let arr = [1,-4, 7, 12];
arr = [1,-2,3,4,5];

//solution using vanilla javascript
function positiveSum(arr) {
    let sum = 0;
    let newArr = [];
  
    for(let i=0; i<arr.length; i++){
        if(arr[i] > 0){
          newArr.push(arr[i]);
        }
    }
    
    for(let i=0; i<newArr.length; i++){
      sum+=newArr[i];
    }
  
    return (sum === []) ? 0 : sum
}

console.log(`Vanilla javascript = ${positiveSum(arr)}`);



arr = [1,-2,3,4,5];
//another optimal solution
let sum = 0;

for(let i=0; i<arr.length; i++){

    if(arr[i] > 0){
        sum+=arr[i];
    }
}

console.log(`Optimal solution = ${sum}`);



arr = [1,-2,3,4,5];
//using es6 reduce function

function positiveSum(arr) {
    return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

console.log(`ES6 solution = ${positiveSum(arr)}`);





