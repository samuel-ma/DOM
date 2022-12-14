

"use strict";

/*
    You get an array of numbers, return the sum of all of the positives ones.

    Example [1,-4,7,12] => 1 + 7 + 12 = 20

    Note: if there is nothing to sum, the sum is default to 0.
*/

let myArr = [-1,2,3,4,-5];

//sum of positive integers in an array
function positiveSum(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){

        if(arr[i] === 0){
            sum = 0;
        } else if(arr[i] < 0){
            sum = 0;
        } else {
            sum += arr[i];
        }
    }
    
    return sum;
}

console.log(positiveSum(myArr));


// let sum = 0;
// let final;

// // console.log(typeof(myArr[0]))

// for(let i=0; i<myArr.length; i++){
//     if(myArr[i] > 0){
//         sum += myArr[i];
//         // console.log(typeof(sum));
//     }
// }

// console.log(sum);
